#/bin/bash -e

echo "Patching syscfg/ti_drivers_config.h"

sed -i "s+#define CONFIG_RF_24GHZ.*+#define CONFIG_RF_24GHZ 6+g" syscfg/ti_drivers_config.h
sed -i "s+#define CONFIG_RF_HIGH_PA.*+#define CONFIG_RF_HIGH_PA 5+g" syscfg/ti_drivers_config.h

# validate change (will exit 1 if not)
grep -Fxq "#define CONFIG_RF_24GHZ 6" syscfg/ti_drivers_config.h
grep -Fxq "#define CONFIG_RF_HIGH_PA 5" syscfg/ti_drivers_config.h
