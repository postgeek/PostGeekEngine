https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D <- Implement the context stuff from here
https://gamedevelopment.tutsplus.com/tutorials/how-to-create-a-custom-2d-physics-engine-the-basics-and-impulse-resolution--gamedev-6331 <- Physics engine

Notes
==================
- Change the asset loader and cache so that loading an asset is seemless to the user.
- Notify observers that all assets have been loaded. (Example to start the scene)
- Something like Assets.load(key, path); or Assets.put(key, path) or Assets.add(key, path)
