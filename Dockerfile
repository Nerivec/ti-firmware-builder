FROM ubuntu:resolute

ARG DEBIAN_FRONTEND=noninteractive

# NOTE: udev required for Blackhawk probe post-install (cannot be disabled during install for CCS 20+)
RUN set -e \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
       bzip2 \
       ca-certificates \
       curl \
       tree \
       git \
       git-lfs \
       jq \
       libgl1 \
       make \
       cmake \
       patch \
       python3 \
       python3-ruamel.yaml \
       unzip \
       xz-utils \
       libpython3.14 \
       udev \
       wget \
       sudo \
    && rm -rf /var/lib/apt/lists/*

# Install https://www.ti.com/tool/download/ARM-CGT-CLANG to /opt/ti-cgt-armllvm_5.1.1.LTS
RUN set -e \
    && curl -fsSL https://dr-download.ti.com/software-development/ide-configuration-compiler-or-debugger/MD-ayxs93eZNN/5.1.1.LTS/ti_cgt_armllvm_5.1.1.LTS_linux-x64_installer.bin -o ti_cgt_armllvm.bin \
    && chmod +x ti_cgt_armllvm.bin \
    && ./ti_cgt_armllvm.bin --help \
    && ./ti_cgt_armllvm.bin --mode unattended --prefix /opt \
    && rm ti_cgt_armllvm.bin

# Install https://www.ti.com/tool/download/CCSTUDIO to /opt/ccs
# TODO: can't get rid of blackhawk
# https://sir.ext.ti.com/jira/browse/EXT_EP-12145
RUN set -e \
    && curl -fsSL https://dr-download.ti.com/software-development/ide-configuration-compiler-or-debugger/MD-J1VdearkvK/21.0.1/CCS_21.0.1.00010_linux.zip -o ccs.zip \
    && unzip -q -d /opt ccs.zip \
    && rm ccs.zip \
    && cd /opt/CCS_21.0.1.00010_linux \
    && chmod +x ccs_setup_21.0.1.00010.run \
    && ./ccs_setup_21.0.1.00010.run --help \
    && ./ccs_setup_21.0.1.00010.run --mode unattended --prefix /opt --enable-components PF_WCONN \
    && cd .. \
    && rm -rf /opt/CCS_21.0.1.00010_linux

# Install https://github.com/TexasInstruments/ot-ti to /opt/ot-ti
# bootstrap script installs sysconfig, so install first, we'll use that one for everything
# IMPORTANT: when updating branch, always check SYSCONFIG_VERSION in ./script/bootstrap to update envs
RUN set -e \
    && cd /opt \
    && git clone --depth 1 -b thread-v1.4-ti https://github.com/TexasInstruments/ot-ti \
    && cd /opt/ot-ti \
    && git rm third_party/ti_simplelink_sdk/repo_cc13xx_cc26xx \
    && git rm third_party/ti_simplelink_sdk/repo_cc23xx_cc27xx \
    && ln -s -f /opt/simplelink-lowpower-f2-sdk /opt/ot-ti/third_party/ti_simplelink_sdk/repo_cc13xx_cc26xx \
    && ln -s -f /opt/simplelink-lowpower-f3-sdk /opt/ot-ti/third_party/ti_simplelink_sdk/repo_cc23xx_cc27xx \
    && git submodule update --init --depth 1 \
    && ./script/bootstrap \
    && cd ..

ENV SYSCONFIG_TOOL="/opt/ti/sysconfig_1.27.0/sysconfig_cli.sh"

# Install https://www.ti.com/tool/download/SIMPLELINK-LOWPOWER-F2-SDK/ to /opt/simplelink_cc13xx_cc26xx_sdk_8_33_00_16
RUN set -e \
    && curl -fsSL https://dr-download.ti.com/software-development/software-development-kit-sdk/MD-BPlR3djvTV/8.33.00.16/simplelink_cc13xx_cc26xx_sdk_8_33_00_16.run -o f2_sdk.run \
    && chmod +x f2_sdk.run \
    && ./f2_sdk.run --help \
    && ./f2_sdk.run --mode unattended --prefix /opt \
    && rm f2_sdk.run \
    && ln -s -f /opt/simplelink_cc13xx_cc26xx_sdk_8_33_00_16 /opt/simplelink-lowpower-f2-sdk

# Install https://github.com/TexasInstruments/simplelink-lowpower-f2-sdk to /opt/simplelink-lowpower-f2-sdk
# RUN set -e \
#     && cd /opt \
#     && git clone --depth 1 -b lpf2-8.33.00.16 https://github.com/TexasInstruments/simplelink-lowpower-f2-sdk \
#     && cd /opt/simplelink-lowpower-f2-sdk \
#     && sed -i -e "s+XDC_INSTALL_DIR.*+XDC_INSTALL_DIR=/opt/ti/xdctools_3_62_01_15_core+g" ./imports.mak \
#     && sed -i -e "s+SYSCONFIG_TOOL.*+SYSCONFIG_TOOL=/opt/ti/sysconfig_1.27.0/sysconfig_cli.sh+g" ./imports.mak \
#     && sed -i -e "s+CMAKE.*+CMAKE=cmake+g" ./imports.mak \
#     && sed -i -e "s+TICLANG_ARMCOMPILER.*+TICLANG_ARMCOMPILER=/opt/ti-cgt-armllvm_5.1.1.LTS+g" ./imports.mak \
#     && sed -i -e "s+GCC_ARMCOMPILER.*++g" ./imports.mak \
#     && sed -i -e "s+IAR_ARMCOMPILER.*++g" ./imports.mak \
#     && make \
#     && cd ..

# # Install https://www.ti.com/tool/download/SIMPLELINK-LOWPOWER-F3-SDK to /opt/simplelink_lowpower_f3_sdk_9_23_00_27
# RUN set -e \
#     && curl -fsSL https://dr-download.ti.com/software-development/software-development-kit-sdk/MD-emMPuXshOG/9.23.00.27/simplelink_lowpower_f3_sdk_9_23_00_27.run -o f3_sdk.run \
#     && chmod +x f3_sdk.run \
#     && ./f3_sdk.run --help \
#     && ./f3_sdk.run --mode unattended --prefix /opt \
#     && rm f3_sdk.run \
#     && ln -s -f /opt/simplelink_lowpower_f3_sdk_9_23_00_27 /opt/simplelink-lowpower-f3-sdk

# Install https://github.com/TexasInstruments/simplelink-lowpower-f3-sdk to /opt/simplelink-lowpower-f3-sdk
RUN set -e \
    && cd /opt \
    && git clone --depth 1 -b lpf3-9.23.00.27 https://github.com/TexasInstruments/simplelink-lowpower-f3-sdk \
    && cd /opt/simplelink-lowpower-f3-sdk \
    && sed -i -e "s+SYSCONFIG_TOOL.*+SYSCONFIG_TOOL=/opt/ti/sysconfig_1.27.0/sysconfig_cli.sh+g" ./imports.mak \
    && sed -i -e "s+CMAKE.*+CMAKE=cmake+g" ./imports.mak \
    && sed -i -e "s+TICLANG_ARMCOMPILER.*+TICLANG_ARMCOMPILER=/opt/ti-cgt-armllvm_5.1.1.LTS+g" ./imports.mak \
    && sed -i -e "s+GCC_ARMCOMPILER.*++g" ./imports.mak \
    && sed -i -e "s+IAR_ARMCOMPILER.*++g" ./imports.mak \
    && make \
    && cd ..

WORKDIR /build
