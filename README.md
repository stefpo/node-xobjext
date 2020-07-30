# xobjext

A small library to help with object manipulation

- Merge objects
- Clone object
- Smart promisify functions 


## Functions

### merge(dest, source, createProperties)
Merges source into dest object. If createProperties is true, the new properties from source are added, otherwise the schema of dest is unchanged.

### clone (v) 
Returns a deep copy of v

### ESNextFunction(f, obj)
Returns a function that provides both promise and callback behavior. When the last parameter passed to the returned function is a function, then the callback behavior is used, otherwise, the function returns a promise.

Example:

        function myFuncCB ( p1, p2, callback ) {
         --
         -- callback ( someResult )
        }

        myFunc = ESNextFunction(myFuncCB)

You can then call: 
    
        myfunc(v1, v2, function( res ) {
                console.log ("Result:" + res)
            })

or (in async function):

        res = await myfunc(v1, v2)
        console.log (res)
    



