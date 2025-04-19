#/bin/bash -e

echo "Patching build/build.ninja"

sed -i -e "s+--rtos freertos /opt/ot-ti/src/openthread.syscfg+--rtos freertos /opt/ot-ti/src/openthread.syscfg \&\& $GITHUB_WORKSPACE/syscfg/ot-rcp_CC1352P_2_other/ti_drivers_config.h-patch.sh+g" build/build.ninja
