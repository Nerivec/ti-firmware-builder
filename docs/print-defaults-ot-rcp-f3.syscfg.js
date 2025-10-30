
// Add this to bottom of .syscfg file and execute sysconfig_cli with
// --script $WORKSPACE_PATH/**/*.syscfg -o $OUT_PATH --product $SDK_PATH/.metadata/product.json

function iterObj(obj, curKey) {
    for (const key in obj) {
        const val = obj[key];

        if (Object.hasOwn(obj, key) && typeof val !== 'function') {
            if (key.startsWith('$')) {
                console.log(`// ${curKey}.${key}`);
            } else {
                const isArray = Array.isArray(val);

                if (typeof val === 'object' && !isArray) {
                    iterObj(val, `${curKey}.${key}`);
                } else {
                    const keyType = typeof val;
                    const eLeft = keyType === 'string' ? '"' : isArray ? '[' : '';
                    const eRight = keyType === 'string' ? '"' : isArray ? ']' : '';
                    const jsVal = isArray ? val.map((v) => typeof v === 'string' ? `"${v}"` : v) : val;

                    console.log(`${curKey}.${key} = ${eLeft}${jsVal}${eRight}; // type: ${isArray ? val.length > 0 ? `${typeof val[0]}[]`: 'unknown[]' : keyType}`);
                }
            }
        }
    }
}

console.group(argv[0]);
/* Modules */
iterObj(DMA, 'DMA');
iterObj(Device, 'Device');
iterObj(GPIO, 'GPIO');
iterObj(NVS, 'NVS');
iterObj(Power, 'Power');
iterObj(RCL, 'RCL');
iterObj(RFCustom, 'RFCustom');
iterObj(RFDesign, 'RFDesign');
iterObj(SHA2, 'SHA2');
iterObj(UART2, 'UART2');
iterObj(Watchdog, 'Watchdog');
iterObj(RNG, 'RNG');

/* Instances */
iterObj(AESECB, 'AESECB');
iterObj(ECDH, 'ECDH');
iterObj(ECDSA, 'ECDSA');
iterObj(GPIO1, 'GPIO1');
iterObj(GPIO2, 'GPIO2');
iterObj(GPIO3, 'GPIO3');
iterObj(GPIO4, 'GPIO4');
iterObj(GPIO5, 'GPIO5');
iterObj(NVS1, 'NVS1');
iterObj(SHA21, 'SHA21');
iterObj(UART, 'UART2');
iterObj(Watchdog1, 'Watchdog1');
iterObj(RNG1, 'RNG1');
console.groupEnd();
