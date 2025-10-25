# Ubuntu 24:
#   - https://software-dl.ti.com/ccs/esd/documents/users_guide_ccs_20.3.1/ccs_installation.html#ubuntu-24-04
#   - https://software-dl.ti.com/ccs/esd/documents/users_guide_ccs_20.3.1/ccs_installation.html#id1
FROM ubuntu:jammy

ARG DEBIAN_FRONTEND=noninteractive

RUN \
    apt-get update \
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
       libc6-i386 \
       libusb-0.1-4 \
       libgconf-2-4 \
       libncurses5 \
       libpython2.7 \
       libtinfo5 \
       wget \
       sudo

# Install https://www.ti.com/tool/download/ARM-CGT-CLANG to /opt/ti-cgt-armllvm_4.0.4.LTS
RUN \
    curl -O https://dr-download.ti.com/software-development/ide-configuration-compiler-or-debugger/MD-ayxs93eZNN/4.0.4.LTS/ti_cgt_armllvm_4.0.4.LTS_linux-x64_installer.bin \
    && chmod +x ti_cgt_armllvm_4.0.4.LTS_linux-x64_installer.bin \
    && ./ti_cgt_armllvm_4.0.4.LTS_linux-x64_installer.bin --help \
    && ./ti_cgt_armllvm_4.0.4.LTS_linux-x64_installer.bin --mode unattended --prefix /opt \
    && rm ti_cgt_armllvm_4.0.4.LTS_linux-x64_installer.bin

# Install https://www.ti.com/tool/download/CCSTUDIO to /opt/ccs
# TODO: can't get rid of blackhawk, fails to install
# https://sir.ext.ti.com/jira/browse/EXT_EP-12145
# RUN \
#     curl -O https://dr-download.ti.com/software-development/ide-configuration-compiler-or-debugger/MD-J1VdearkvK/20.3.1/CCS_20.3.1.00005_linux.zip \
#     && unzip -q -d /opt CCS_20.3.1.00005_linux.zip \
#     && rm CCS_20.3.1.00005_linux.zip \
#     && cd /opt/CCS_20.3.1.00005_linux \
#     && chmod +x ccs_setup_20.3.1.00005.run \
#     && ./ccs_setup_20.3.1.00005.run --help \
#     && ./ccs_setup_20.3.1.00005.run --mode unattended --prefix /opt --enable-components PF_WCONN \
#     # && chown root theia/chrome-sandbox \ # Ubuntu 24
#     # && chmod 4755 theia/chrome-sandbox \ # Ubuntu 24
#     && cd .. \
#     && rm -rf /opt/CCS_20.3.1.00005_linux

# Install https://www.ti.com/tool/download/CCSTUDIO to /opt/ccs
RUN \
    curl -O https://dr-download.ti.com/software-development/ide-configuration-compiler-or-debugger/MD-J1VdearkvK/12.8.1/CCS12.8.1.00005_linux-x64.tar.gz \
    && tar -C /opt -xf CCS12.8.1.00005_linux-x64.tar.gz \
    && rm CCS12.8.1.00005_linux-x64.tar.gz \
    && cd /opt/CCS12.8.1.00005_linux-x64 \
    && chmod +x ccs_setup_12.8.1.00005.run \
    && ./ccs_setup_12.8.1.00005.run --help \
    && ./ccs_setup_12.8.1.00005.run --mode unattended --prefix /opt --enable-components PF_WCONN --install-BlackHawk false --install-Segger false \
    && cd .. \
    && rm -rf /opt/CCS12.8.1.00005_linux-x64

# Install https://www.ti.com/tool/download/SIMPLELINK-LOWPOWER-F2-SDK/ to /opt/simplelink_cc13xx_cc26xx_sdk_8_31_00_11
RUN \
    curl -O https://dr-download.ti.com/software-development/software-development-kit-sdk/MD-BPlR3djvTV/8.31.00.11/simplelink_cc13xx_cc26xx_sdk_8_31_00_11.run \
    && chmod +x simplelink_cc13xx_cc26xx_sdk_8_31_00_11.run \
    && ./simplelink_cc13xx_cc26xx_sdk_8_31_00_11.run --help \
    && ./simplelink_cc13xx_cc26xx_sdk_8_31_00_11.run --mode unattended --prefix /opt \
    && rm simplelink_cc13xx_cc26xx_sdk_8_31_00_11.run

# Install https://www.ti.com/tool/download/SIMPLELINK-LOWPOWER-F3-SDK to /opt/simplelink_lowpower_f3_sdk_9_12_00_19
RUN \
    curl -O https://dr-download.ti.com/software-development/software-development-kit-sdk/MD-emMPuXshOG/9.12.00.19/simplelink_lowpower_f3_sdk_9_12_00_19.run \
    && chmod +x simplelink_lowpower_f3_sdk_9_12_00_19.run \
    && ./simplelink_lowpower_f3_sdk_9_12_00_19.run --help \
    && ./simplelink_lowpower_f3_sdk_9_12_00_19.run --mode unattended --prefix /opt \
    && rm simplelink_lowpower_f3_sdk_9_12_00_19.run

# Install https://github.com/TexasInstruments/ot-ti to /opt/ot-ti
RUN \
    cd /opt \
    && git clone --depth 1 -b thread-v1.4-ti https://github.com/TexasInstruments/ot-ti \
    && cd /opt/ot-ti \
    && git rm third_party/ti_simplelink_sdk/repo_cc13xx_cc26xx \
    && git rm third_party/ti_simplelink_sdk/repo_cc23xx_cc27xx \
    && ln -s -f /opt/simplelink_cc13xx_cc26xx_sdk_8_31_00_11 /opt/ot-ti/third_party/ti_simplelink_sdk/repo_cc13xx_cc26xx \
    && ln -s -f /opt/simplelink_lowpower_f3_sdk_9_12_00_19 /opt/ot-ti/third_party/ti_simplelink_sdk/repo_cc23xx_cc27xx \
    && git submodule update --init --depth 1 \
    && ./script/bootstrap \
    && cd ..

WORKDIR /build
