import AssetCache from '../../src/managers/AssetCache';
import AssetLoader from '../../src/managers/AssetLoader';
import { AssetLoadingStatus } from '../../src/managers/Asset';

jest.mock('../../src/managers/AssetLoader');

beforeEach(() => {
  AssetLoader.mockClear();
});

describe('registerAsset', () => {
  it('should register an asset with a given key', () => {
    // Arange
    const cache = new AssetCache();
    const initialKey = 'someKey';
    const expectedKey = 'somekey';

    // Act
    cache.registerAsset(initialKey, 'somePath');

    // Asset
    expect(cache.assets[expectedKey]).not.toBe(null);

  })
  it('should register an asset with status new', () => {
    // Arange
    const cache = new AssetCache();

    // Act
    cache.registerAsset('someKey', 'somePath');

    // Asset
    expect(cache.assets['someKey'].status).toBe(AssetLoadingStatus.NEW);

  })
  it('should register an asset with a given path', () => {
    // Arange
    const cache = new AssetCache();
    const initialPath = 'somePath';
    const expectedPath = 'somePath';

    // Act
    cache.registerAsset('someKey', initialPath);

    // Asset
    expect(cache.assets['someKey'].path).toBe(expectedPath);

  })
})

describe('loadAsset', () => {
  it('should set asset status to loaded when load is successful', () => {
    // Arange
    AssetLoader.mockImplementation(() => { 
      return {
        load: () => new Promise((resolve, reject) => {
          return resolve("Good!");
        })
      };
    });

    const cache = new AssetCache();
    cache.registerAsset('someKey', 'somePath');

    // Act
    const promise = cache.loadAsset('someKey');

    // Assert
    promise.then(() => {
      expect(cache.assets['someKey'].status).toBe(AssetLoadingStatus.LOADED);
    });
  })
  it('should set asset status to error when load is unsuccessful', async () => {
    // Arange
    AssetLoader.mockImplementation(() => { 
      return {
        load: () => new Promise((resolve, reject) => {
          return reject();
        })
      };
    });

    const cache = new AssetCache();
    cache.registerAsset('someKey', 'somePath');

    // Act
    try {
      await cache.loadAsset('someKey');
    } catch (e) {}

    // Assert
    expect(cache.assets['someKey'].status).toBe(AssetLoadingStatus.ERROR);
  })
  it('should not load an asset twice when called twice', () => {
    // Arange
    const func = AssetLoader.mockImplementation(() => { 
      return {
        load: () => new Promise((resolve, reject) => {
          return resolve("Good!");
        })
      };
    });

    const cache = new AssetCache();
    cache.registerAsset('someKey', 'somePath');

    // Act
    cache.loadAsset('someKey');
    cache.loadAsset('someKey');

    // Assert
    expect(func).toHaveBeenCalledTimes(1);
  })
})

describe('getAsset', () => {
  it('should return the asset value when the asset had been loaded', async () => {
    // Arange
    AssetLoader.mockImplementation(() => { 
      return {
        load: () => new Promise((resolve, reject) => {
          return resolve("Good!");
        })
      };
    });

    const cache = new AssetCache();
    let actualAssetValue = undefined;

    // Act
    cache.registerAsset('someKey', 'somePath');
    await cache.loadAsset('someKey');
    actualAssetValue = cache.getAsset('someKey');

    // Assert
    expect(actualAssetValue).toBeDefined();
  })
  it('should not return the asset value when the asset has not been loaded', () => {
    // Arange
    AssetLoader.mockImplementation(() => { 
      return {
        load: () => new Promise((resolve, reject) => {
          return resolve("Good!");
        })
      };
    });

    const cache = new AssetCache();
    let actualAssetValue = undefined;

    // Act
    cache.registerAsset('someKey', 'somePath');
    actualAssetValue = cache.getAsset('someKey');

    // Assert
    expect(actualAssetValue).not.toBeDefined();
  })
})

describe('removeAsset', () => {
  it('should removed an asset for a given key', () => {
    // Arrange
    const cache = new AssetCache();
    const key = 'someKey';

    // Act
    cache.registerAsset(key, 'somePath');
    cache.removeAsset(key);

    // Assert
    expect(cache.assets[key]).not.toBeDefined();
  })
})



describe('destroy', () => {
  it('should removed all assets', () => {
    // Arrange
    const cache = new AssetCache();

    // Act
    cache.registerAsset("someKey", 'somePath');
    cache.registerAsset("someKey2", 'somePath2');
    cache.registerAsset("someKey3", 'somePath3');
    cache.destroy();

    // Assert
    expect(cache.assets).toBeDefined();
    expect(Object.keys(cache.assets).length).toBe(0);
  })
})