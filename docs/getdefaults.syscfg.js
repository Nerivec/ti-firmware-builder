// Add this to bottom of .syscfg file and execute sysconfig_cli with
// --script $WORKSPACE_PATH/**/*.syscfg -o $OUT_PATH --product $SDK_PATH/.metadata/product.json

function iterObj(obj, curKey) {
    for (const key in obj) {
        if (Object.hasOwn(obj, key) && !key.startsWith('$') && typeof obj[key] !== 'function') {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                iterObj(obj[key], `${curKey}.${key}`);
            } else {
                console.log(`${curKey}.${key}`, obj[key]);
            }
        }
    }
}

iterObj(AESCBC, 'AESCBC');
iterObj(AESCCM, 'AESCCM');
iterObj(AESECB, 'AESECB');
iterObj(device, 'device');
iterObj(DMA, 'DMA');
iterObj(ECDH, 'ECDH');
iterObj(ECDSA, 'ECDSA');
iterObj(Button, 'Button');
iterObj(LED, 'LED');
iterObj(NVS, 'NVS');
iterObj(Power, 'Power');
iterObj(RF, 'RF');
iterObj(SHA2, 'SHA2');
iterObj(TRNG, 'TRNG');
iterObj(Display, 'Display');
iterObj(zstack, 'zstack');

iterObj(AESCBC1, 'AESCBC1');
iterObj(AESCCM1, 'AESCCM1');
iterObj(AESECB1, 'AESECB1');
iterObj(ECDH1, 'ECDH1');
iterObj(ECDSA1, 'ECDSA1');
iterObj(Button1, 'Button1');
iterObj(Button2, 'Button2');
iterObj(LED1, 'LED1');
iterObj(LED2, 'LED2');
iterObj(NVS1, 'NVS1');
iterObj(NVS2, 'NVS2');
iterObj(SHA21, 'SHA21');
iterObj(TRNG1, 'TRNG1');
iterObj(Display_UART, 'Display_UART');
