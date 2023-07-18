import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,e as d}from"./app-bceb4080.js";const l={},s=d(`<h1 id="终端" tabindex="-1"><a class="header-anchor" href="#终端" aria-hidden="true">#</a> 终端</h1><h2 id="终端配置" tabindex="-1"><a class="header-anchor" href="#终端配置" aria-hidden="true">#</a> 终端配置</h2><p>linux，mac下用alacritty终端，windows下使用自带Terminal<br> brew install alacritty</p><h3 id="zsh安装和oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#zsh安装和oh-my-zsh" aria-hidden="true">#</a> zsh安装和oh-my-zsh</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt install zsh
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zellij使用" tabindex="-1"><a class="header-anchor" href="#zellij使用" aria-hidden="true">#</a> zellij使用</h3><h4 id="功能简述" tabindex="-1"><a class="header-anchor" href="#功能简述" aria-hidden="true">#</a> 功能简述:</h4><p>该工具使用,可以在终端文本环境下,提供多个标签页并在多个标签页下创建一个或多个窗口进行复用,简化切换会话的复杂度.自带快捷键提示，操作简单。</p><h4 id="使用截图" tabindex="-1"><a class="header-anchor" href="#使用截图" aria-hidden="true">#</a> 使用截图:</h4><figure><img src="https://pic1.zhimg.com/v2-d9265712ecb94f3ded46dad54a91a5e8_b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="快捷键介绍" tabindex="-1"><a class="header-anchor" href="#快捷键介绍" aria-hidden="true">#</a> 快捷键介绍</h4><h4 id="允许使用-tmux-的部分快捷键" tabindex="-1"><a class="header-anchor" href="#允许使用-tmux-的部分快捷键" aria-hidden="true">#</a> 允许使用 tmux 的部分快捷键</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>快捷键中 ctrl -&gt; C 替换  alt -&gt; M 替换  后续一直有效
首先zellij 保留了部分tmux的快捷键 方便tmux快速接受 默认开启可关闭
使用前置快捷建（先按下部分键放手，按下子功能键） -&gt;  C-b  
移动焦点，切换窗口   -&gt;   &lt;方向键&gt;
左右分割             -&gt;     %
上下分割             -&gt;      &quot;
当前窗口全屏         -&gt;      z
        创建新标签页         -&gt;      c
        重命名当前标签页     -&gt;      ,
        切换上一个标签页     -&gt;      p
切换下一个标签页     -&gt;      n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="软件本身快捷键" tabindex="-1"><a class="header-anchor" href="#软件本身快捷键" aria-hidden="true">#</a> 软件本身快捷键</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#软件除了本身支持部分直接快捷键（组合键按一次就好），大部分通过前置快捷键进行功能方向的选择，再次通过子功能快捷键确定
大的功能类分为：
锁定窗口（lock）     -&gt;    C-g
窗口操作（pane）     -&gt;    C-p
        标签操作（tab）      -&gt;    C-t
窗口大小（resize）   -&gt;    C-n
窗口移动（move）     -&gt;    C-h
        窗口内容（scrool）   -&gt;    C-s
会话操作（session）  -&gt;    C-o
退出(quit)           -&gt;    C-q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="锁定窗口" tabindex="-1"><a class="header-anchor" href="#锁定窗口" aria-hidden="true">#</a> 锁定窗口</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>快捷键     -&gt;      C-g
#锁定窗口没有子功能键，设计目的为，避免zellij本身快捷键与会话内应用快捷键冲突
#使用此功能后，会自动屏蔽zellij的其他快捷快捷键，包括退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="窗口操作" tabindex="-1"><a class="header-anchor" href="#窗口操作" aria-hidden="true">#</a> 窗口操作</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前置快捷键   -&gt;    C-p
#内置多个对窗口管理的快捷键
移动焦点，切换到其他窗口    -&gt;    &lt;方向键&gt;
        新建窗口                    -&gt;       n
直接快捷键         --&gt;      M-n
当前窗口下方新建窗口        -&gt;       d
        当前窗口右方新建窗口        -&gt;       r
        关闭当前窗口                -&gt;       x
        全屏显示（字符界面内）      -&gt;       f
        窗口边框开关                -&gt;       z
        窗口重命名                  -&gt;       c
        新建浮动窗口                -&gt;       w
将浮动窗口嵌入              -&gt;       e
下一个窗口                  -&gt;       p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="标签操作" tabindex="-1"><a class="header-anchor" href="#标签操作" aria-hidden="true">#</a> 标签操作</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前置快捷键   -&gt;    C-t
#对标签页进行管理，标签页概念类似chrome浏览器标签页
移动至其他标签页            -&gt;    &lt;方向键&gt;
新建标签页                  -&gt;       n
关闭标签页                  -&gt;       x
重命名标签页                -&gt;       r
同步操作（多个会话输入同样内容）  -&gt;    s
选中窗口                    -&gt;     &lt;回车&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="窗口大小" tabindex="-1"><a class="header-anchor" href="#窗口大小" aria-hidden="true">#</a> 窗口大小</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前置快捷键    -&gt;     C-n
#对当前焦点所在窗口进行大小设置
各个方向的扩展（只能变大）   -&gt;    &lt;方向键&gt;
整体窗口大小                 -&gt;     &lt;-/+&gt;
确定修改                     -&gt;     &lt;回车&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="窗口移动" tabindex="-1"><a class="header-anchor" href="#窗口移动" aria-hidden="true">#</a> 窗口移动</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前置快捷键    -&gt;      C-h
移动或者切换当前焦点所在窗口位置(浮动窗口有效)    -&gt;    &lt;方向键&gt;
交换位置                                          -&gt;      n
确定修改                                          -&gt;     &lt;回车&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="窗口内容" tabindex="-1"><a class="header-anchor" href="#窗口内容" aria-hidden="true">#</a> 窗口内容</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前置快捷键    -&gt;      C-s
上下行滚动内容             -&gt;    &lt;方向键上下&gt;
窗口内翻页滚动             -&gt;    &lt;pgUp/pgDown&gt;
窗口内最首行               -&gt;    u
窗口内最尾行               -&gt;    d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="会话操作" tabindex="-1"><a class="header-anchor" href="#会话操作" aria-hidden="true">#</a> 会话操作</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前置快捷键    -&gt;      C-o
分离当前会话              -&gt;   d
选中当前窗口              -&gt;   &lt;回车&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="退出" tabindex="-1"><a class="header-anchor" href="#退出" aria-hidden="true">#</a> 退出</h4><h4 id="会话管理" tabindex="-1"><a class="header-anchor" href="#会话管理" aria-hidden="true">#</a> 会话管理</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#以下内容属于工作模式的一些操作
#为终端环境的操作命令

zeelij -s &lt;名称&gt;
#创建一个会话设定名称

zellij attach &lt;名称&gt;
#加入指定名称会话，可以同步操作

zellij  list-sessions
#查看当前环境所有zellij会话

zellij  kill-all-sessions
#杀死全部zellij会话

zellij  kill-session  &lt;&gt;
#杀死指定会话
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),a=[s];function t(r,v){return n(),e("div",null,a)}const o=i(l,[["render",t],["__file","终端.html.vue"]]);export{o as default};
