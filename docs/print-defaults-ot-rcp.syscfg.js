
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
iterObj(AESECB, 'AESECB');
iterObj(DMA, 'DMA');
iterObj(Device, 'Device');
iterObj(ECDH, 'ECDH');
iterObj(ECDSA, 'ECDSA');

if (ECJPAKE) {
    iterObj(ECJPAKE, 'ECJPAKE');
}

iterObj(GPIO, 'GPIO');
iterObj(NVS, 'NVS');
iterObj(Power, 'Power');
iterObj(RF, 'RF');
iterObj(RFCustom, 'RFCustom');
iterObj(RFDesign, 'RFDesign');
iterObj(SHA2, 'SHA2');
iterObj(SPI, 'SPI');
iterObj(TRNG, 'TRNG');
iterObj(Watchdog, 'Watchdog');

iterObj(GPIO1, 'GPIO1');
iterObj(GPIO2, 'GPIO2');
iterObj(GPIO3, 'GPIO3');
iterObj(GPIO4, 'GPIO4');
iterObj(GPIO5, 'GPIO5');
iterObj(NVS1, 'NVS1');
iterObj(SHA21, 'SHA21');
iterObj(SPI2, 'SPI2');
iterObj(TRNG1, 'TRNG1');
iterObj(UART2, 'UART2');
iterObj(Watchdog1, 'Watchdog1');
console.groupEnd();
