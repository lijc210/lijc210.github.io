import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as u,c as r,a as i,b as n,d as s,e as a}from"./app-2253670b.js";const t={},o=i("h1",{id:"rust",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#rust","aria-hidden":"true"},"#"),n(" rust")],-1),v=i("h2",{id:"rust-教程",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#rust-教程","aria-hidden":"true"},"#"),n(" rust 教程")],-1),c={href:"https://course.rs/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.runoob.com/rust/rust-tutorial.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<h2 id="rust换国内源" tabindex="-1"><a class="header-anchor" href="#rust换国内源" aria-hidden="true">#</a> rust换国内源</h2><p>C:\\Users\\用户名.cargo\\config</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[source.crates-io]
# 替换成你偏好的镜像源
replace-with = &#39;rsproxy&#39;
 
# 清华大学 5mb
[source.tuna]
registry = &quot;https://mirrors.tuna.tsinghua.edu.cn/git/crates.io-index.git&quot;
 
# 中国科学技术大学 2mb
[source.ustc]
registry = &quot;https://mirrors.ustc.edu.cn/crates.io-index&quot;
# 上海交通大学 2mb
[source.sjtu]
registry = &quot;https://mirrors.sjtug.sjtu.edu.cn/git/crates.io-index&quot;
 
# rustcc社区 2mb
[source.rustcc]
registry = &quot;https://crates.rustcc.cn/crates.io-index&quot;
# 字节跳动 10mb
[source.rsproxy]
registry = &quot;https://rsproxy.cn/crates.io-index&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="终端配置" tabindex="-1"><a class="header-anchor" href="#终端配置" aria-hidden="true">#</a> 终端配置</h2><p>linux，mac下用alacritty终端，windows下使用自带Terminal<br> brew install alacritty</p><h3 id="zsh安装和oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#zsh安装和oh-my-zsh" aria-hidden="true">#</a> zsh安装和oh-my-zsh</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt install zsh
chsh -s /bin/zsh

sh -c &quot;$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;

curl: (35) error:0A000126:SSL routines::unexpected eof while reading
添加 --tlsv1.2 或 --tlsv1.3

安装oh-my-zsh插件
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
plugins=(其他的插件 zsh-syntax-highlighting)
git clone https://github.com/zsh-users/zsh-autosuggestions \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
plugins=(其他的插件 zsh-autosuggestions)

windows下wsl环境command not found: ^M
git config --global core.autocrlf false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="starship命令行主题" tabindex="-1"><a class="header-anchor" href="#starship命令行主题" aria-hidden="true">#</a> starship命令行主题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cargo install starship
~/.bashrc
eval &quot;$(starship init bash)&quot;
~/.zshrc
eval &quot;$(starship init zsh)&quot;
starship preset tokyo-night -o ~/.config/starship.toml
分享主题
https://starship.rs/zh-CN/presets/#nerd-%E5%AD%97%E4%BD%93%E7%AC%A6%E5%8F%B7

安装 Nerd fonts
Source Code Pro 是 Adobe 公司号称最佳的编程字体。而且还是开源的。
Fira 是 Mozilla 主推的字体系列，Fira Code 是基于 Fira Mono 等宽字体的一个扩展，主要特点是加入了编程连字特性

Jetbrains Mono、FiraCode、Source Code Pro、Consolas
Source Code Pro和Consolas不具有连字的功能，推荐Jetbrains Mono

macbook下
brew tap homebrew/cask-fonts
brew install font-jetbrains-mono
brew install font-jetbrains-mono-nerd-font
brew install font-fira-code-nerd-font

linux下（windows下的Terminal需要在windows上安装）
mkdir -p ~/.local/share/fonts 
Wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.0/JetBrainsMono.zip
unzip JetBrainsMono.zip -d ~/.local/share/fonts 
cd ~/.local/share/fonts 
# 生成核心字体信息
sudo mkfontscale 
# 生成字体文件夹
sudo mkfontdir 
# 刷新系统字体缓存
sudo fc-cache -fv 
提示mkfontscale: command not found
sudo apt install ttf-mscorefonts-installer
sudo apt install fontconfig

windows下
下载解压
Wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.0/JetBrainsMono.zip
设置-&gt;个性化-&gt;字体，安装所有字体
打开Terminal设置，Ubuntu-&gt;外观，选择相关字体

vscode设置字体
&quot;terminal.integrated.fontFamily&quot;: &quot;FiraCode Nerd Font Mono&quot;
&quot;terminal.integrated.fontFamily&quot;: &quot;JetBrainsMonoNL Nerd Font Mono&quot;
&quot;editor.fontFamily&quot;: &quot;JetBrainsMonoNL Nerd Font Mono&quot;
&quot;editor.fontLigatures&quot;: true

https://zuolan.me/2023-terminal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="alacritty配置" tabindex="-1"><a class="header-anchor" href="#alacritty配置" aria-hidden="true">#</a> alacritty配置</h3><p>~/.config/alacritty/alacritty.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 指定 Alacritty 启动时使用 Fish Shell
shell:
  program: /usr/local/bin/fish
  args:
    - --login

# 不指定 TERM 会导致一些旧机器通过 ssh 连接时无法正常工作
env:
  TERM: xterm-256color

# Colors (Tomorrow Night Bright)
colors:
  # Default colors
  primary:
    background: &#39;0x002b36&#39;
    foreground: &#39;0x93a1a1&#39;

  # Colors the cursor will use if \`custom_cursor_colors\` is true
  cursor:
    text: &#39;0x002b36&#39;
    cursor: &#39;0x93a1a1&#39;

  # Normal colors
  normal:
    black:   &#39;0x002b36&#39;
    red:     &#39;0xdc322f&#39;
    green:   &#39;0x859900&#39;
    yellow:  &#39;0xb58900&#39;
    blue:    &#39;0x268bd2&#39;
    magenta: &#39;0x6c71c4&#39;
    cyan:    &#39;0x2aa198&#39;
    white:   &#39;0x93a1a1&#39;

  # Bright colors
  bright:
    black:   &#39;0x657b83&#39;
    red:     &#39;0xdc322f&#39;
    green:   &#39;0x859900&#39;
    yellow:  &#39;0xb58900&#39;
    blue:    &#39;0x268bd2&#39;
    magenta: &#39;0x6c71c4&#39;
    cyan:    &#39;0x2aa198&#39;
    white:   &#39;0xfdf6e3&#39;

  indexed_colors:
    - { index: 16, color: &#39;0xcb4b16&#39; }
    - { index: 17, color: &#39;0xd33682&#39; }
    - { index: 18, color: &#39;0x073642&#39; }
    - { index: 19, color: &#39;0x586e75&#39; }
    - { index: 20, color: &#39;0x839496&#39; }
    - { index: 21, color: &#39;0xeee8d5&#39; }

# 设置字体
# 字体下载: https://www.nerdfonts.com/font-downloads
# 图标符号搜索: https://www.nerdfonts.com/cheat-sheet
# 推荐备选字体: JetBrains Mono Regular Nerd Font Complete Mono
font:
  normal:
    family: &#39;SauceCodePro Nerd Font Mono&#39;
    style: Regular
  bold:
    family: &#39;SauceCodePro Nerd Font Mono&#39;
    style: Regular
  italic:
    family: &#39;SauceCodePro Nerd Font Mono&#39;
    style: Italic
  bold_italic:
    family: &#39;SauceCodePro Nerd Font Mono&#39;
    style: Italic

  # 字体大小
  size: 16.0

  offset:
    x: 0
    y: 4
  glyph_offset:
    x: 0
    y: 2

window:
  # 窗口透明度 (0 全透明, 1 不透明)
  opacity: 0.9
  padding:
    x: 5
    y: 0
  decorations: transparent

scrolling:
  # 回滚缓冲区中的最大行数,指定“0”将禁用滚动。
  history: 10000
  # 滚动行数
  multiplier: 4

cursor:
  style:
    shape: Block

selection:
  semantic_escape_chars: &#39;,│\`|:&quot;&#39;&#39; ()[]{}&lt;&gt;&#39;
  save_to_clipboard: true

live_config_reload: true

# 全屏显示窗口, 绑定快捷键 Ctrl-x
key_bindings:
  - { key: X, mods: Control, action: ToggleSimpleFullscreen }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zellij-配置" tabindex="-1"><a class="header-anchor" href="#zellij-配置" aria-hidden="true">#</a> Zellij 配置</h3><p>mkdir ~/.config/zellij<br> zellij setup --dump-config &gt; ~/.config/zellij/config.kdl</p><p>~/.config/zellij/config.kdl</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// default_shell &quot;/usr/local/bin/fish&quot;
default_shell &quot;/bin/zsh&quot;

// 默认布局
default_layout &quot;zuolan&quot;

// 无箭头字体
// simplified_ui true

// 显示边框
pane_frames false

// 缓冲区行数
scroll_buffer_size 10000

// 鼠标选择和选择即复制, 按住 shift 使用终端原生选词
copy_on_select true
mouse_mode true

// 镜像会话
mirror_session true

// 默认模式
default_mode &quot;locked&quot;

// 主题
theme &quot;nord&quot;
themes {
   nord {
        fg 216 222 233
        bg 46 52 64
        black 64 67 77
        red 191 97 106
        green 163 190 140
        yellow 235 203 139
        blue 129 161 193
        magenta 180 142 173
        cyan 136 192 208
        white 229 233 240
        orange 208 135 112
    }
}

// 自定义快捷键
keybinds {
    pane clear-defaults=true {}
    resize clear-defaults=true {}
    move clear-defaults=true {}
    session clear-defaults=true {}
    scroll clear-defaults=true {}
    tmux clear-defaults=true {}
    renamepane clear-defaults=true {}
    tab clear-defaults=true {
        bind &quot;Ctrl s&quot; &quot;Ctrl d&quot; &quot;Esc&quot; &quot;Enter&quot; { SwitchToMode &quot;locked&quot;; }
        bind &quot;]&quot; { GoToNextTab; }
        bind &quot;[&quot; { GoToPreviousTab; }
    }
    locked clear-defaults=true {
        bind &quot;Ctrl s&quot; { SwitchToMode &quot;normal&quot;; }
        bind &quot;Ctrl d&quot; { SwitchToMode &quot;locked&quot;; }  // 防止意外退出
    }
    search clear-defaults=true {
        // 搜索上一个
        bind &quot;p&quot; { SearchToggleOption &quot;CaseSensitivity&quot;; Search &quot;up&quot;; }
        // 搜索下一个
        bind &quot;n&quot; { SearchToggleOption &quot;CaseSensitivity&quot;; Search &quot;down&quot;; }
        // 退出搜索
        bind &quot;Ctrl s&quot; &quot;Ctrl d&quot; &quot;Esc&quot; &quot;Enter&quot; { SwitchToMode &quot;locked&quot;; }
    }
    entersearch clear-defaults=true {
        // 输入搜索关键词之后, 按下回车进入搜索模式
        bind &quot;Enter&quot; { SwitchToMode &quot;Search&quot;; }
        // 退出搜索
        bind &quot;Ctrl s&quot; &quot;Ctrl d&quot; &quot;Esc&quot; { SwitchToMode &quot;locked&quot;; }
    }
    renametab clear-defaults=true {
        // 改标签名称后返回锁定模式
        bind &quot;Ctrl s&quot; &quot;Ctrl d&quot; &quot;Esc&quot; &quot;Enter&quot; { SwitchToMode &quot;locked&quot;; }
    }
    normal clear-defaults=true {
        // 切换到锁定模式
        bind &quot;Ctrl s&quot; &quot;Ctrl d&quot; &quot;Esc&quot; &quot;Enter&quot; { SwitchToMode &quot;locked&quot;; }
        // 关闭当前焦点区域
        bind &quot;x&quot; { CloseFocus; SwitchToMode &quot;locked&quot;; }
        // 编辑缓冲区内容
        bind &quot;e&quot; { EditScrollback; SwitchToMode &quot;locked&quot;; }
        // 上一页/下一页
        bind &quot;Tab&quot; { ToggleTab; SwitchToMode &quot;locked&quot;; }
        bind &quot;]&quot; { GoToNextTab; SwitchToMode &quot;tab&quot;; }
        bind &quot;[&quot; { GoToPreviousTab; SwitchToMode &quot;tab&quot;; }
        // 新建标签页
        bind &quot;c&quot; { NewTab; SwitchToMode &quot;locked&quot;; }
        // 页内移动焦点
        bind &quot;h&quot; { MoveFocus &quot;Left&quot;; SwitchToMode &quot;locked&quot;; }
        bind &quot;l&quot; { MoveFocus &quot;Right&quot;; SwitchToMode &quot;locked&quot;; }
        bind &quot;k&quot; { MoveFocus &quot;Up&quot;; SwitchToMode &quot;locked&quot;; }
        bind &quot;j&quot; { MoveFocus &quot;Down&quot;; SwitchToMode &quot;locked&quot;; }
        // 页内交换区域
        bind &quot;Alt h&quot; { MovePane &quot;Left&quot;; SwitchToMode &quot;locked&quot;; }
        bind &quot;Alt l&quot; { MovePane &quot;Right&quot;; SwitchToMode &quot;locked&quot;; }
        bind &quot;Alt k&quot; { MovePane &quot;Up&quot;; SwitchToMode &quot;locked&quot;; }
        bind &quot;Alt j&quot; { MovePane &quot;Down&quot;; SwitchToMode &quot;locked&quot;; }
        // 分屏
        bind &quot;\\\\&quot; { NewPane &quot;Right&quot;; SwitchToMode &quot;locked&quot;; }
        bind &quot;-&quot; { NewPane &quot;Down&quot;; SwitchToMode &quot;locked&quot;; }
        // 调整分屏大小
        bind &quot;Left&quot; { Resize &quot;Left&quot;; }
        bind &quot;Right&quot; { Resize &quot;Right&quot;; }
        bind &quot;Up&quot; { Resize &quot;Up&quot;; }
        bind &quot;Down&quot; { Resize &quot;Down&quot;; }
        // 同步所有分屏
        bind &quot;\`&quot; { ToggleActiveSyncTab; SwitchToMode &quot;locked&quot;; }
        // 重命名标签页
        bind &quot;,&quot; { SwitchToMode &quot;RenameTab&quot;; TabNameInput 0; }
        // 浮动分屏
        bind &quot;Space&quot; { ToggleFloatingPanes; SwitchToMode &quot;locked&quot;; }
        // 搜索模式
        bind &quot;s&quot; { SwitchToMode &quot;EnterSearch&quot;; SearchInput 0; }
        // 放大分屏
        bind &quot;z&quot; { ToggleFocusFullscreen; SwitchToMode &quot;locked&quot;; }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zellij布局文件" tabindex="-1"><a class="header-anchor" href="#zellij布局文件" aria-hidden="true">#</a> zellij布局文件</h3><p>~/.config/zellij/layouts/zuolan.kdl</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
layout {
    default_tab_template {
        pane size=1 borderless=true {
            plugin location=&quot;zellij:compact-bar&quot;
        }
        children
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function q(h,g){const e=d("ExternalLinkIcon");return u(),r("div",null,[o,v,i("ul",null,[i("li",null,[i("a",c,[n("rust 圣言"),s(e)])]),i("li",null,[i("a",b,[n("rust 菜鸟教程"),s(e)])])]),m])}const x=l(t,[["render",q],["__file","rust.html.vue"]]);export{x as default};
