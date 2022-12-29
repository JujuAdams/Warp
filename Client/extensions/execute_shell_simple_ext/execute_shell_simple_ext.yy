{
  "resourceType": "GMExtension",
  "resourceVersion": "1.2",
  "name": "execute_shell_simple_ext",
  "optionsFile": "options.json",
  "options": [],
  "exportToGame": true,
  "supportedTargets": 113497714299118,
  "extensionVersion": "1.0.0",
  "packageId": "",
  "productId": "",
  "author": "",
  "date": "2019-12-12T01:34:29",
  "license": "Proprietary",
  "description": "",
  "helpfile": "",
  "iosProps": true,
  "tvosProps": false,
  "androidProps": true,
  "installdir": "",
  "files": [
    {"resourceType":"GMExtensionFile","resourceVersion":"1.0","name":"","filename":"execute_shell_simple_ext.dll","origname":"extensions\\execute_shell_simple_ext.dll","init":"","final":"","kind":1,"uncompress":false,"functions":[
        {"resourceType":"GMExtensionFunction","resourceVersion":"1.0","name":"execute_shell_simple_raw","externalName":"execute_shell_simple_raw","kind":11,"help":"","hidden":true,"returnType":2,"argCount":4,"args":[
            1,
            1,
            1,
            2,
          ],"documentation":"",},
      ],"constants":[],"ProxyFiles":[
        {"resourceType":"GMProxyFile","resourceVersion":"1.0","name":"execute_shell_simple_ext_x64.dll","TargetMask":6,},
      ],"copyToTargets":9223372036854775807,"usesRunnerInterface":false,"order":[
        {"name":"execute_shell_simple_raw","path":"extensions/execute_shell_simple_ext/execute_shell_simple_ext.yy",},
      ],},
    {"resourceType":"GMExtensionFile","resourceVersion":"1.0","name":"","filename":"execute_shell_simple_ext.gml","origname":"extensions\\gml.gml","init":"","final":"","kind":2,"uncompress":false,"functions":[
        {"resourceType":"GMExtensionFunction","resourceVersion":"1.0","name":"execute_shell_simple","externalName":"execute_shell_simple","kind":2,"help":"execute_shell_simple(path, args = \"\", action = \"open\", showCmd = 5/*SW_OPEN*/)","hidden":false,"returnType":2,"argCount":-1,"args":[],"documentation":"",},
      ],"constants":[],"ProxyFiles":[],"copyToTargets":9223372036854775807,"usesRunnerInterface":false,"order":[
        {"name":"execute_shell_simple","path":"extensions/execute_shell_simple_ext/execute_shell_simple_ext.yy",},
      ],},
    {"resourceType":"GMExtensionFile","resourceVersion":"1.0","name":"","filename":"autogen.gml","origname":"extensions\\autogen.gml","init":"","final":"","kind":2,"uncompress":false,"functions":[],"constants":[],"ProxyFiles":[],"copyToTargets":-1,"usesRunnerInterface":false,"order":[],},
  ],
  "classname": "",
  "tvosclassname": "",
  "tvosdelegatename": "",
  "iosdelegatename": "",
  "androidclassname": "",
  "sourcedir": "",
  "androidsourcedir": "",
  "macsourcedir": "",
  "maccompilerflags": "",
  "tvosmaccompilerflags": "",
  "maclinkerflags": "",
  "tvosmaclinkerflags": "",
  "iosplistinject": "",
  "tvosplistinject": "",
  "androidinject": "",
  "androidmanifestinject": "",
  "androidactivityinject": "",
  "gradleinject": "",
  "androidcodeinjection": "",
  "hasConvertedCodeInjection": true,
  "ioscodeinjection": "",
  "tvoscodeinjection": "",
  "iosSystemFrameworkEntries": [],
  "tvosSystemFrameworkEntries": [],
  "iosThirdPartyFrameworkEntries": [],
  "tvosThirdPartyFrameworkEntries": [],
  "IncludedResources": [],
  "androidPermissions": [],
  "copyToTargets": 113497714299118,
  "iosCocoaPods": "",
  "tvosCocoaPods": "",
  "iosCocoaPodDependencies": "",
  "tvosCocoaPodDependencies": "",
  "parent": {
    "name": "Extensions",
    "path": "folders/Warp/Extensions.yy",
  },
}