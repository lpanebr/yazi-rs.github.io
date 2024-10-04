"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[307],{5515:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var t=i(1527),r=i(6225),a=i(2537),s=i(1332),l=i(6591);const o={sidebar_position:9,description:"A few helpful tips for using Yazi."},c="Tips",d={id:"tips",title:"Tips",description:"A few helpful tips for using Yazi.",source:"@site/docs/tips.md",sourceDirName:".",slug:"/tips",permalink:"/docs/tips",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/tips.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"A few helpful tips for using Yazi."},sidebar:"docsSidebar",previous:{title:"DDS",permalink:"/docs/dds"},next:{title:"Resources",permalink:"/docs/resources"}},h={},u=[{value:"Full border",id:"full-border",level:2},{value:"Dropping to the shell",id:"dropping-to-shell",level:2},{value:"Close input by once <kbd>Esc</kbd> press",id:"close-input-by-esc",level:2},{value:"Smart enter: <code>enter</code> for directory, <code>open</code> for file",id:"smart-enter",level:2},{value:"Smart paste: <code>paste</code> files without entering the directory",id:"smart-paste",level:2},{value:"Folder-specific rules",id:"folder-rules",level:2},{value:"Drag and drop via <code>dragon</code>",id:"drag-and-drop",level:2},{value:"Copy selected files to the system clipboard while yanking",id:"selected-files-to-clipboard",level:2},{value:"<code>cd</code> back to the root of the current Git repository",id:"cd-to-git-root",level:2},{value:"Maximize preview pane",id:"max-preview",level:2},{value:"Hide preview pane",id:"hide-preview",level:2},{value:"File navigation wraparound",id:"navigation-wraparound",level:2},{value:"Navigation in the parent directory without leaving the CWD",id:"parent-arrow",level:2},{value:"No status bar",id:"no-status-bar",level:2},{value:"Show symlink in status bar",id:"symlink-in-status",level:2},{value:"Show user/group of files in status bar",id:"user-group-in-status",level:2},{value:"Show username and hostname in header",id:"username-hostname-in-header",level:2},{value:"File tree picker in Helix with Zellij",id:"helix-with-zellij",level:2},{value:"Make Yazi even faster than fast",id:"make-yazi-even-faster",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tips",children:"Tips"})}),"\n",(0,t.jsx)(n.p,{children:"These tips require prior knowledge of the Yazi configuration file."}),"\n",(0,t.jsxs)(n.p,{children:["If you are using Yazi for the first time, please read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/overview",children:"configuration"})," and ",(0,t.jsx)(n.a,{href:"/docs/plugins/overview",children:"plugins"})," documentation first."]}),"\n",(0,t.jsx)(n.h2,{id:"full-border",children:"Full border"}),"\n",(0,t.jsx)("img",{src:(0,l.ZP)("/img/full-border.png"),width:"600"}),"\n",(0,t.jsxs)(n.p,{children:["Moved to ",(0,t.jsx)(n.a,{href:"https://github.com/yazi-rs/plugins/tree/main/full-border.yazi",children:"https://github.com/yazi-rs/plugins/tree/main/full-border.yazi"})]}),"\n",(0,t.jsx)(n.h2,{id:"dropping-to-shell",children:"Dropping to the shell"}),"\n",(0,t.jsxs)(n.p,{children:["Add this keybinding to your ",(0,t.jsx)(n.code,{children:"keymap.toml"}),":"]}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(s.Z,{value:"unix",label:"Unix",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[[manager.prepend_keymap]]\non   = "!"\nrun  = \'shell "$SHELL" --block --confirm\'\ndesc = "Open shell here"\n'})})}),(0,t.jsx)(s.Z,{value:"windows",label:"Windows",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[[manager.prepend_keymap]]\non   = "<C-s>"\nrun  = \'shell "powershell.exe" --block --confirm\'\ndesc = "Open PowerShell here"\n'})})})]}),"\n",(0,t.jsxs)(n.h2,{id:"close-input-by-esc",children:["Close input by once ",(0,t.jsx)("kbd",{children:"Esc"})," press"]}),"\n",(0,t.jsxs)(n.p,{children:["You can change the ",(0,t.jsx)("kbd",{children:"Esc"})," of input component from the default ",(0,t.jsx)(n.code,{children:"escape"})," to ",(0,t.jsx)(n.code,{children:"close"})," command, in your ",(0,t.jsx)(n.code,{children:"keymap.toml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[[input.prepend_keymap]]\non   = "<Esc>"\nrun  = "close"\ndesc = "Cancel input"\n'})}),"\n",(0,t.jsx)(n.p,{children:"to exiting input directly, without entering Vi mode, making it behave like a regular input box."}),"\n",(0,t.jsxs)(n.h2,{id:"smart-enter",children:["Smart enter: ",(0,t.jsx)(n.code,{children:"enter"})," for directory, ",(0,t.jsx)(n.code,{children:"open"})," for file"]}),"\n",(0,t.jsxs)(n.p,{children:["Save these lines as ",(0,t.jsx)(n.code,{children:"~/.config/yazi/plugins/smart-enter.yazi/init.lua"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'return {\n\tentry = function()\n\t\tlocal h = cx.active.current.hovered\n\t\tya.manager_emit(h and h.cha.is_dir and "enter" or "open", { hovered = true })\n\tend,\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then bind it for ",(0,t.jsx)("kbd",{children:"l"})," key, in your ",(0,t.jsx)(n.code,{children:"keymap.toml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[[manager.prepend_keymap]]\non   = "l"\nrun  = "plugin --sync smart-enter"\ndesc = "Enter the child directory, or open the file"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This plugin adds ",(0,t.jsx)(n.code,{children:"hovered = true"})," to make the behavior of ",(0,t.jsx)(n.a,{href:"/docs/configuration/keymap#manager.open",children:"open"})," consistent with ",(0,t.jsx)(n.a,{href:"/docs/configuration/keymap#manager.enter",children:"enter"})," avoiding accidental triggers,\nwhich means both will only target the currently hovered file. If you still want ",(0,t.jsx)(n.code,{children:"open"})," to target multiple selected files, set it to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"smart-paste",children:["Smart paste: ",(0,t.jsx)(n.code,{children:"paste"})," files without entering the directory"]}),"\n",(0,t.jsxs)(n.p,{children:["Save these lines as ",(0,t.jsx)(n.code,{children:"~/.config/yazi/plugins/smart-paste.yazi/init.lua"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'return {\n\tentry = function()\n\t\tlocal h = cx.active.current.hovered\n\t\tif h and h.cha.is_dir then\n\t\t\tya.manager_emit("enter", {})\n\t\t\tya.manager_emit("paste", {})\n\t\t\tya.manager_emit("leave", {})\n\t\telse\n\t\t\tya.manager_emit("paste", {})\n\t\tend\n\tend,\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then bind it for ",(0,t.jsx)("kbd",{children:"p"})," key, in your ",(0,t.jsx)(n.code,{children:"keymap.toml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[[manager.prepend_keymap]]\non   = "p"\nrun  = "plugin --sync smart-paste"\ndesc = "Paste into the hovered directory or CWD"\n'})}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Demonstrate smart paste"}),(0,t.jsxs)("p",{children:["Original post: ",(0,t.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/discussions/957#discussioncomment-9239519",children:"https://github.com/sxyazi/yazi/discussions/957#discussioncomment-9239519"})]}),(0,t.jsx)("video",{src:"https://github.com/sxyazi/yazi/assets/17523360/080212b5-43e7-4c36-83e8-312495d50383",width:"100%",controls:!0,muted:!0})]}),"\n",(0,t.jsx)(n.h2,{id:"folder-rules",children:"Folder-specific rules"}),"\n",(0,t.jsxs)(n.p,{children:["You can subscribe to directory change events through the ",(0,t.jsxs)(n.a,{href:"/docs/dds#cd",children:[(0,t.jsx)(n.code,{children:"cd"})," event provided by DDS"]}),", and then do any action you want, such as setting different sorting methods for specific directories."]}),"\n",(0,t.jsxs)(n.p,{children:["The following code demonstrates making the ",(0,t.jsx)(n.code,{children:"Downloads"})," directory to sort by modification time, while others are sorted alphabetically. Save these lines as ",(0,t.jsx)(n.code,{children:"~/.config/yazi/plugins/folder-rules.yazi/init.lua"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local function setup()\n\tps.sub("cd", function()\n\t\tlocal cwd = cx.active.current.cwd\n\t\tif cwd:ends_with("Downloads") then\n\t\t\tya.manager_emit("sort", { "modified", reverse = true, dir_first = false })\n\t\telse\n\t\t\tya.manager_emit("sort", { "alphabetical", reverse = false, dir_first = true })\n\t\tend\n\tend)\nend\n\nreturn { setup = setup }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then enable it in your ",(0,t.jsx)(n.code,{children:"~/.config/yazi/init.lua"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'require("folder-rules"):setup()\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Credits to ",(0,t.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/issues/623#issuecomment-2096270843",children:"@tianze0926 for sharing it"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"drag-and-drop",children:["Drag and drop via ",(0,t.jsx)(n.a,{href:"https://github.com/mwh/dragon",children:(0,t.jsx)(n.code,{children:"dragon"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Original post: ",(0,t.jsx)(n.a,{href:"https://github.com/sxyazi/yazi/discussions/327",children:"https://github.com/sxyazi/yazi/discussions/327"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:"[[manager.prepend_keymap]]\non  = \"<C-n>\"\nrun = '''\n\tshell 'dragon -x -i -T \"$1\"' --confirm\n'''\n"})}),"\n",(0,t.jsx)(n.h2,{id:"selected-files-to-clipboard",children:"Copy selected files to the system clipboard while yanking"}),"\n",(0,t.jsxs)(n.p,{children:["Yazi allows multiple commands to be bound to a single key, so you can set ",(0,t.jsx)("kbd",{children:"y"})," to not only do the ",(0,t.jsx)(n.code,{children:"yank"})," but also run a shell script:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:"[[manager.prepend_keymap]]\non  = \"y\"\nrun = [ '''\n\tshell 'echo \"$@\" | xclip -i -selection clipboard -t text/uri-list' --confirm\n''', \"yank\" ]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The above is available on X11, there is also a Wayland version (Thanks ",(0,t.jsx)(n.a,{href:"https://discord.com/channels/1136203602898194542/1136203604076802092/1188498323867455619",children:"@hurutparittya for sharing this"})," in Yazi's discord server):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:"[[manager.prepend_keymap]]\non  = \"y\"\nrun = [ '''\n\tshell 'for path in \"$@\"; do echo \"file://$path\"; done | wl-copy -t text/uri-list' --confirm\n''', \"yank\" ]\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"cd-to-git-root",children:[(0,t.jsx)(n.code,{children:"cd"})," back to the root of the current Git repository"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:"[[manager.prepend_keymap]]\non = [ \"g\", \"r\" ]\nrun = '''\n\tshell 'ya pub dds-cd --str \"$(git rev-parse --show-toplevel)\"' --confirm\n'''\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Credits to ",(0,t.jsx)(n.a,{href:"https://t.me/yazi_rs/3325/15373",children:"@aidanzhai for sharing it"})," in Yazi's telegram group."]}),"\n",(0,t.jsx)(n.h2,{id:"max-preview",children:"Maximize preview pane"}),"\n",(0,t.jsxs)(n.p,{children:["Moved to ",(0,t.jsx)(n.a,{href:"https://github.com/yazi-rs/plugins/tree/main/max-preview.yazi",children:"https://github.com/yazi-rs/plugins/tree/main/max-preview.yazi"})]}),"\n",(0,t.jsx)(n.h2,{id:"hide-preview",children:"Hide preview pane"}),"\n",(0,t.jsxs)(n.p,{children:["Moved to ",(0,t.jsx)(n.a,{href:"https://github.com/yazi-rs/plugins/tree/main/hide-preview.yazi",children:"https://github.com/yazi-rs/plugins/tree/main/hide-preview.yazi"})]}),"\n",(0,t.jsx)(n.h2,{id:"navigation-wraparound",children:"File navigation wraparound"}),"\n",(0,t.jsxs)(n.p,{children:["Save these lines as ",(0,t.jsx)(n.code,{children:"~/.config/yazi/plugins/arrow.yazi/init.lua"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'return {\n\tentry = function(_, args)\n\t\tlocal current = cx.active.current\n\t\tlocal new = (current.cursor + args[1]) % #current.files\n\t\tya.manager_emit("arrow", { new - current.cursor })\n\tend,\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then bind it for ",(0,t.jsx)("kbd",{children:"k"})," and ",(0,t.jsx)("kbd",{children:"j"})," key, in your ",(0,t.jsx)(n.code,{children:"keymap.toml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[[manager.prepend_keymap]]\non  = "k"\nrun = "plugin --sync arrow --args=-1"\n\n[[manager.prepend_keymap]]\non  = "j"\nrun = "plugin --sync arrow --args=1"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"parent-arrow",children:"Navigation in the parent directory without leaving the CWD"}),"\n",(0,t.jsxs)(n.p,{children:["Save these lines as ",(0,t.jsx)(n.code,{children:"~/.config/yazi/plugins/parent-arrow.yazi/init.lua"}),":"]}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(s.Z,{value:"classic",label:"Classic",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local function entry(_, args)\n\tlocal parent = cx.active.parent\n\tif not parent then return end\n\n\tlocal target = parent.files[parent.cursor + 1 + args[1]]\n\tif target and target.cha.is_dir then\n\t\tya.manager_emit("cd", { target.url })\n\tend\nend\n\nreturn { entry = entry }\n'})})}),(0,t.jsx)(s.Z,{value:"skip-files",label:"Skip files",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"local function entry(_, args)\n\tlocal parent = cx.active.parent\n\tif not parent then return end\n\n\tlocal offset = tonumber(args[1])\n\tif not offset then return ya.err(args[1], 'is not a number') end\n\n\tlocal start = parent.cursor + 1 + offset\n\tlocal end_ = offset < 0 and 1 or #parent.files\n\tlocal step = offset < 0 and -1 or 1\n\tfor i = start, end_, step do\n\t\tlocal target = parent.files[i]\n\t\tif target and target.cha.is_dir then\n\t\t\treturn ya.manager_emit(\"cd\", { target.url })\n\t\tend\n\tend\nend\n\nreturn { entry = entry }\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Then bind it for ",(0,t.jsx)("kbd",{children:"K"})," and ",(0,t.jsx)("kbd",{children:"J"})," key, in your ",(0,t.jsx)(n.code,{children:"keymap.toml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[[manager.prepend_keymap]]\non  = "K"\nrun = "plugin --sync parent-arrow --args=-1"\n\n[[manager.prepend_keymap]]\non  = "J"\nrun = "plugin --sync parent-arrow --args=1"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"no-status-bar",children:"No status bar"}),"\n",(0,t.jsx)("img",{src:(0,l.ZP)("/img/no-status-bar.jpg"),width:"600"}),"\n",(0,t.jsxs)(n.p,{children:["Moved to ",(0,t.jsx)(n.a,{href:"https://github.com/yazi-rs/plugins/tree/main/no-status.yazi",children:"https://github.com/yazi-rs/plugins/tree/main/no-status.yazi"})]}),"\n",(0,t.jsx)(n.h2,{id:"symlink-in-status",children:"Show symlink in status bar"}),"\n",(0,t.jsx)("img",{src:(0,l.ZP)("/img/symlink-in-status.png"),width:"600"}),"\n",(0,t.jsxs)(n.p,{children:["Copy the ",(0,t.jsxs)(n.a,{href:"https://github.com/sxyazi/yazi/blob/shipped/yazi-plugin/preset/components/status.lua",children:[(0,t.jsx)(n.code,{children:"Status:name()"})," method"]})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.em,{children:"only"})})," to your ",(0,t.jsx)(n.code,{children:"~/.config/yazi/init.lua"}),", and apply the following patch:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'@@ -65,7 +65,11 @@ function Status:name()\n \t\treturn ui.Line {}\n \tend\n\n-\treturn ui.Line(" " .. h.name)\n+\tlocal linked = ""\n+\tif h.link_to ~= nil then\n+\t\tlinked = " -> " .. tostring(h.link_to)\n+\tend\n+\treturn ui.Line(" " .. h.name .. linked)\n end\n'})}),"\n",(0,t.jsx)(n.h2,{id:"user-group-in-status",children:"Show user/group of files in status bar"}),"\n",(0,t.jsx)("img",{src:(0,l.ZP)("/img/owner.png"),width:"600"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code to your ",(0,t.jsx)(n.code,{children:"~/.config/yazi/init.lua"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'Status:children_add(function()\n\tlocal h = cx.active.current.hovered\n\tif h == nil or ya.target_family() ~= "unix" then\n\t\treturn ui.Line {}\n\tend\n\n\treturn ui.Line {\n\t\tui.Span(ya.user_name(h.cha.uid) or tostring(h.cha.uid)):fg("magenta"),\n\t\tui.Span(":"),\n\t\tui.Span(ya.group_name(h.cha.gid) or tostring(h.cha.gid)):fg("magenta"),\n\t\tui.Span(" "),\n\t}\nend, 500, Status.RIGHT)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"username-hostname-in-header",children:"Show username and hostname in header"}),"\n",(0,t.jsx)("img",{src:(0,l.ZP)("/img/hostname-in-header.png"),width:"600"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code to your ",(0,t.jsx)(n.code,{children:"~/.config/yazi/init.lua"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'Header:children_add(function()\n\tif ya.target_family() ~= "unix" then\n\t\treturn ui.Line {}\n\tend\n\treturn ui.Span(ya.user_name() .. "@" .. ya.host_name() .. ":"):fg("blue")\nend, 500, Header.LEFT)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"helix-with-zellij",children:"File tree picker in Helix with Zellij"}),"\n",(0,t.jsx)(n.p,{children:"Yazi can be used as a file picker to browse and open file(s) in your current Helix instance (running in a Zellij session)."}),"\n",(0,t.jsxs)(n.p,{children:["Add a keymap to your Helix config, for example ",(0,t.jsx)("kbd",{children:"Ctrl"})," + ",(0,t.jsx)("kbd",{children:"y"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'# ~/.config/helix/config.toml\n[keys.normal]\nC-y = ":sh zellij run -f -x 10% -y 10% --width 80% --height 80% -- bash ~/.config/helix/yazi-picker.sh"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Then save the following script as ",(0,t.jsx)(n.code,{children:"~/.config/helix/yazi-picker.sh"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'#!/usr/bin/env bash\n\npaths=$(yazi --chooser-file=/dev/stdout | while read -r; do printf "%q " "$REPLY"; done)\n\nif [[ -n "$paths" ]]; then\n\tzellij action toggle-floating-panes\n\tzellij action write 27 # send <Escape> key\n\tzellij action write-chars ":open $paths"\n\tzellij action write 13 # send <Enter> key\n\tzellij action toggle-floating-panes\nfi\n\nzellij action close-pane\n'})}),"\n",(0,t.jsx)(n.p,{children:"Note: this uses a floating window, but you should also be able to open a new pane to the side, or in place. Review the Zellij documentation for more info."}),"\n",(0,t.jsxs)(n.p,{children:["Original post: ",(0,t.jsx)(n.a,{href:"https://github.com/zellij-org/zellij/issues/3018#issuecomment-2086166900",children:"https://github.com/zellij-org/zellij/issues/3018#issuecomment-2086166900"}),", credits to ",(0,t.jsx)(n.a,{href:"https://github.com/rockboynton",children:"@rockboynton"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/postsolar",children:"@postsolar"})," for sharing and polishing it!"]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Demonstrate Helix+Zellij+Yazi workflow"}),(0,t.jsx)("video",{src:"https://github.com/helix-editor/helix/assets/17523360/a4dde9e0-96bf-42a4-b946-40cbee984e69",width:"100%",controls:!0,muted:!0})]}),"\n",(0,t.jsx)(n.h2,{id:"make-yazi-even-faster",children:"Make Yazi even faster than fast"}),"\n",(0,t.jsx)(n.p,{children:"While Yazi is already fast, there is still plenty of room for optimization for specific users or under certain conditions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For users who don't need image previews at all, disabling the default ",(0,t.jsx)(n.code,{children:"image"})," previewer and preloader will make Yazi faster by reducing the I/O read file and CPU decode image consumption."]}),"\n",(0,t.jsx)(n.li,{children:"For users managing network files, it's recommended to disable all previewers and preloaders since previewing and preloading these files means they need to be downloaded locally."}),"\n",(0,t.jsxs)(n.li,{children:["For low-spec devices like Raspberry Pi, ",(0,t.jsx)(n.a,{href:"/docs/configuration/yazi#tasks",children:"reducing the concurrency"})," will make Yazi faster since the default configuration is optimized for PCs, and high concurrency on these low-spec devices may have the opposite effect."]}),"\n",(0,t.jsxs)(n.li,{children:["For users who don't need accurate mime-type, ",(0,t.jsx)(n.a,{href:"https://github.com/yazi-rs/plugins/tree/main/mime-ext.yazi",children:(0,t.jsx)(n.code,{children:"mime-ext.yazi"})})," may be useful, as it simply returns mime-type based on file extensions, while Yazi defaults to obtaining mime-type based on file content for accuracy. Mime-type is used for matching opening, previewing, rendering rules. Encourage users to choose an appropriate ",(0,t.jsx)(n.code,{children:"mime"})," plugin based on their needs, which is why we decided to open it up to plugin developers."]}),"\n",(0,t.jsxs)(n.li,{children:["For high-performance terminal emulators, lowering the ",(0,t.jsxs)(n.a,{href:"/docs/configuration/yazi/#preview.image_delay",children:[(0,t.jsx)(n.code,{children:"image_delay"})," option"]})," or setting it to 0 can reduce image preview latency."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},1332:(e,n,i)=>{i.d(n,{Z:()=>s});i(959);var t=i(5341);const r={tabItem:"tabItem_x1w9"};var a=i(1527);function s(e){let{children:n,hidden:i,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:i,children:n})}},2537:(e,n,i)=>{i.d(n,{Z:()=>w});var t=i(959),r=i(5341),a=i(4384),s=i(8903),l=i(3524),o=i(6824),c=i(5753),d=i(1384);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:r}}=e;return{value:n,label:i,attributes:t,default:r}}))}(i);return function(e){const n=(0,c.lx)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:i}=e;const r=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,o._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,a=u(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,h]=m({queryString:i,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(i);return[r,(0,t.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:r}),x=(()=>{const e=c??g;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,a]),tabValues:a}}var f=i(4957);const x={tabList:"tabList_Z_Km",tabItem:"tabItem_CrVd"};var y=i(1527);function j(e){let{className:n,block:i,selectedValue:t,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,i=o.indexOf(n),r=l[i].value;r!==t&&(c(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},n),children:l.map((e=>{let{value:n,label:i,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:a}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,y.jsx)(j,{...n,...e}),(0,y.jsx)(b,{...n,...e})]})}function w(e){const n=(0,f.Z)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(n))}},6225:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>s});var t=i(959);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);