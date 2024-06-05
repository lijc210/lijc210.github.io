import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,d as a}from"./app-Dztt1bKx.js";const i="/assets/images/%E7%BB%88%E7%AB%AF.png",l={},t=a(`<h1 id="终端" tabindex="-1"><a class="header-anchor" href="#终端"><span>终端</span></a></h1><h2 id="终端配置" tabindex="-1"><a class="header-anchor" href="#终端配置"><span>终端配置</span></a></h2><p>参考https://zuolan.me/2023-terminal</p><p>windows, linux，mac下用alacritty终端，</p><h3 id="zsh安装" tabindex="-1"><a class="header-anchor" href="#zsh安装"><span>zsh安装</span></a></h3><p>mac下：brew install zsh ubuntu下：apt install zsh zsh --version chsh -s /bin/zsh</p><h3 id="安装oh-my-zsh-如使用starship则不用安装" tabindex="-1"><a class="header-anchor" href="#安装oh-my-zsh-如使用starship则不用安装"><span>安装oh-my-zsh（如使用starship则不用安装）</span></a></h3><p>sh -c &quot;$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot; curl: (35) error:0A000126:SSL routines::unexpected eof while reading 添加 --tlsv1.2 或 --tlsv1.3</p><p>下载主题 brew install powerlevel10k echo &quot;source $(brew --prefix)/share/powerlevel10k/powerlevel10k.zsh-theme&quot; &gt;&gt;~/.zshrc source ~/.zshrc</p><p>配置powerlevel10k p10k configure</p><p>安装oh-my-zsh插件 git clone https://github.com/zsh-users/zsh-syntax-highlighting.git \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting git clone https://github.com/zsh-users/zsh-autosuggestions \${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions vim .zshrc plugins=(git zsh-syntax-highlighting zsh-autosuggestions)</p><p>windows下wsl环境command not found: ^M git config --global core.autocrlf false</p><h3 id="安装starship命令行主题-个人更喜欢powerlevel10k" tabindex="-1"><a class="header-anchor" href="#安装starship命令行主题-个人更喜欢powerlevel10k"><span>安装starship命令行主题（个人更喜欢powerlevel10k）</span></a></h3><p>cargo install starship ~/.bashrc eval &quot;$(starship init bash)&quot; ~/.zshrc eval &quot;$(starship init zsh)&quot; starship preset tokyo-night -o ~/.config/starship.toml 分享主题 https://starship.rs/zh-CN/presets/#nerd-%E5%AD%97%E4%BD%93%E7%AC%A6%E5%8F%B7</p><p>图标字体不能显示需要安装Nerd fonts</p><h3 id="安装-nerd-fonts-字体" tabindex="-1"><a class="header-anchor" href="#安装-nerd-fonts-字体"><span>安装 Nerd fonts 字体</span></a></h3><p>Source Code Pro 是 Adobe 公司号称最佳的编程字体。而且还是开源的。 Fira 是 Mozilla 主推的字体系列，Fira Code 是基于 Fira Mono 等宽字体的一个扩展，主要特点是加入了编程连字特性</p><p>Jetbrains Mono、FiraCode、Source Code Pro、Consolas Source Code Pro和Consolas不具有连字的功能，推荐Jetbrains Mono</p><p>windows下的Terminal和alacritty需要在windows上安装字体才能正常显示</p><p>macbook下 brew tap homebrew/cask-fonts brew install font-jetbrains-mono brew install font-jetbrains-mono-nerd-font brew install font-fira-code-nerd-font</p><p>linux下 mkdir -p ~/.local/share/fonts Wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.0/JetBrainsMono.zip unzip JetBrainsMono.zip -d ~/.local/share/fonts cd ~/.local/share/fonts</p><ul><li>生成核心字体信息 sudo mkfontscale</li><li>生成字体文件夹 sudo mkfontdir</li><li>刷新系统字体缓存 sudo fc-cache -fv 提示mkfontscale: command not found sudo apt install ttf-mscorefonts-installer sudo apt install fontconfig</li></ul><p>windows下 下载解压 Wget https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.0/JetBrainsMono.zip 设置-&gt;个性化-&gt;字体，安装所有字体 打开Terminal设置，Ubuntu-&gt;外观，选择相关字体</p><p>vscode设置字体 &quot;terminal.integrated.fontFamily&quot;: &quot;JetBrainsMonoNL Nerd Font Mono&quot; &quot;editor.fontFamily&quot;: &quot;JetBrainsMonoNL Nerd Font Mono&quot; &quot;editor.fontLigatures&quot;: true</p><h3 id="alacritty配置" tabindex="-1"><a class="header-anchor" href="#alacritty配置"><span>alacritty配置</span></a></h3><p>brew install alacritty</p><p>macOS &amp; Linux: ~/.config/alacritty/alacritty.yml Windows: %APPDATA%\\alacritty\\alacritty.yml</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>live_config_reload <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">#tabspaces = 4</span>

<span class="token punctuation">[</span>font<span class="token punctuation">]</span>
size <span class="token operator">=</span> <span class="token number">12.0</span>

<span class="token punctuation">[</span>font.bold<span class="token punctuation">]</span>
family <span class="token operator">=</span> <span class="token string">&quot;JetBrainsMonoNL Nerd Font Mono&quot;</span>
style <span class="token operator">=</span> <span class="token string">&quot;Regular&quot;</span>

<span class="token punctuation">[</span>font.bold_italic<span class="token punctuation">]</span>
family <span class="token operator">=</span> <span class="token string">&quot;JetBrainsMonoNL Nerd Font Mono&quot;</span>
style <span class="token operator">=</span> <span class="token string">&quot;Italic&quot;</span>

<span class="token punctuation">[</span>font.glyph_offset<span class="token punctuation">]</span>
x <span class="token operator">=</span> <span class="token number">0</span>
y <span class="token operator">=</span> <span class="token number">2</span>

<span class="token punctuation">[</span>font.italic<span class="token punctuation">]</span>
family <span class="token operator">=</span> <span class="token string">&quot;JetBrainsMonoNL Nerd Font Mono&quot;</span>
style <span class="token operator">=</span> <span class="token string">&quot;Italic&quot;</span>

<span class="token punctuation">[</span>font.normal<span class="token punctuation">]</span>
family <span class="token operator">=</span> <span class="token string">&quot;JetBrainsMonoNL Nerd Font Mono&quot;</span>
style <span class="token operator">=</span> <span class="token string">&quot;Regular&quot;</span>

<span class="token punctuation">[</span>font.offset<span class="token punctuation">]</span>
x <span class="token operator">=</span> <span class="token number">0</span>
y <span class="token operator">=</span> <span class="token number">4</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span>keyboard.bindings<span class="token punctuation">]</span><span class="token punctuation">]</span>
action <span class="token operator">=</span> <span class="token string">&quot;ToggleMaximized&quot;</span>
key <span class="token operator">=</span> <span class="token string">&quot;A&quot;</span>
mods <span class="token operator">=</span> <span class="token string">&quot;Control&quot;</span>

<span class="token punctuation">[</span>scrolling<span class="token punctuation">]</span>
<span class="token comment">#auto_scroll = true</span>
<span class="token comment">#faux_multiplier = 100</span>
<span class="token function">history</span> <span class="token operator">=</span> <span class="token number">2000</span>
multiplier <span class="token operator">=</span> <span class="token number">20</span>

<span class="token punctuation">[</span>shell<span class="token punctuation">]</span>
<span class="token comment">#program = &quot;/opt/homebrew/bin/zellij&quot;</span>
program <span class="token operator">=</span> <span class="token string">&quot;/bin/zsh&quot;</span>


<span class="token punctuation">[</span>window<span class="token punctuation">]</span>
decorations <span class="token operator">=</span> <span class="token string">&quot;full&quot;</span>
dynamic_padding <span class="token operator">=</span> <span class="token boolean">false</span>
opacity <span class="token operator">=</span> <span class="token number">1</span>
startup_mode <span class="token operator">=</span> <span class="token string">&quot;Windowed&quot;</span>

<span class="token punctuation">[</span>window.dimensions<span class="token punctuation">]</span>
columns <span class="token operator">=</span> <span class="token number">120</span>
lines <span class="token operator">=</span> <span class="token number">35</span>

<span class="token punctuation">[</span>window.padding<span class="token punctuation">]</span>
x <span class="token operator">=</span> <span class="token number">0</span>
y <span class="token operator">=</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zellij-配置-alacritty已支持多窗口-不再需要zellij" tabindex="-1"><a class="header-anchor" href="#zellij-配置-alacritty已支持多窗口-不再需要zellij"><span>Zellij 配置 （alacritty已支持多窗口，不再需要Zellij）</span></a></h3><p>安装 apt install zellij brew install zellij</p><p>bash/zsh: bash &lt;(curl -L zellij.dev/launch) fish/xonsh: bash -c &#39;bash &lt;(curl -L zellij.dev/launch)&#39;</p><p>默认配置 mkdir ~/.config/zellij zellij setup --dump-config &gt; ~/.config/zellij/config.kdl</p><p>~/.config/zellij/config.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// default_shell &quot;/usr/local/bin/fish&quot;
default_shell &quot;/bin/zsh&quot;

// 默认布局Default: &quot;default&quot;
default_layout &quot;z1y2&quot;
// default_layout &quot;compact&quot;

// 关闭动作detach (Default)
on_force_close &quot;detach&quot;

// 无箭头字体false (Default)
simplified_ui true


// 显示边框true (default)
pane_frames true

// 缓冲区行数
scroll_buffer_size 10000

// 鼠标选择和选择即复制, 按住 shift 使用终端原生选词Default: true
copy_on_select true
// 鼠标模式（选取）true (default)
mouse_mode true

// 镜像会话
mirror_session true

// 默认模式Default: normal
default_mode &quot;normal&quot;

// 主题
theme &quot;nord&quot;
themes {
    nord {
        fg &quot;#D8DEE9&quot;
        bg &quot;#2E3440&quot;
        black &quot;#3B4252&quot;
        red &quot;#BF616A&quot;
        green &quot;#A3BE8C&quot;
        yellow &quot;#EBCB8B&quot;
        blue &quot;#81A1C1&quot;
        magenta &quot;#B48EAD&quot;
        cyan &quot;#88C0D0&quot;
        white &quot;#E5E9F0&quot;
        orange &quot;#D08770&quot;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zellij布局文件" tabindex="-1"><a class="header-anchor" href="#zellij布局文件"><span>zellij布局文件</span></a></h3><p>~/.config/zellij/layouts/zuolan.kdl</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>layout {
    pane split_direction=&quot;vertical&quot; {
        pane
        pane split_direction=&quot;horizontal&quot; {
            pane
            pane
        }
    }
    pane size=1 borderless=true {
        plugin location=&quot;zellij:compact-bar&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果 <img src="`+i+`" alt="" loading="lazy"></p><h3 id="zellij使用" tabindex="-1"><a class="header-anchor" href="#zellij使用"><span>zellij使用</span></a></h3><h4 id="功能简述" tabindex="-1"><a class="header-anchor" href="#功能简述"><span>功能简述:</span></a></h4><p>该工具使用,可以在终端文本环境下,提供多个标签页并在多个标签页下创建一个或多个窗口进行复用,简化切换会话的复杂度.自带快捷键提示，操作简单。</p><h4 id="使用截图" tabindex="-1"><a class="header-anchor" href="#使用截图"><span>使用截图:</span></a></h4><figure><img src="https://pic1.zhimg.com/v2-d9265712ecb94f3ded46dad54a91a5e8_b.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="快捷键介绍" tabindex="-1"><a class="header-anchor" href="#快捷键介绍"><span>快捷键介绍</span></a></h4><h4 id="允许使用-tmux-的部分快捷键" tabindex="-1"><a class="header-anchor" href="#允许使用-tmux-的部分快捷键"><span>允许使用 tmux 的部分快捷键</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>快捷键中 ctrl -<span class="token operator">&gt;</span> C 替换  alt -<span class="token operator">&gt;</span> M 替换  后续一直有效
首先zellij 保留了部分tmux的快捷键 方便tmux快速接受 默认开启可关闭
使用前置快捷建（先按下部分键放手，按下子功能键） -<span class="token operator">&gt;</span>  C-b  
移动焦点，切换窗口   -<span class="token operator">&gt;</span>   <span class="token operator">&lt;</span>方向键<span class="token operator">&gt;</span>
左右分割             -<span class="token operator">&gt;</span>     %
上下分割             -<span class="token operator">&gt;</span>      &quot;
当前窗口全屏         -<span class="token operator">&gt;</span>      z
        创建新标签页         -<span class="token operator">&gt;</span>      c
        重命名当前标签页     -<span class="token operator">&gt;</span>      ,
        切换上一个标签页     -<span class="token operator">&gt;</span>      p
切换下一个标签页     -<span class="token operator">&gt;</span>      n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="软件本身快捷键" tabindex="-1"><a class="header-anchor" href="#软件本身快捷键"><span>软件本身快捷键</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#软件除了本身支持部分直接快捷键（组合键按一次就好），大部分通过前置快捷键进行功能方向的选择，再次通过子功能快捷键确定
大的功能类分为：
锁定窗口（lock）     -&gt;    C-g
窗口操作（pane）     -&gt;    C-p
        标签操作（tab）      -&gt;    C-t
窗口大小（resize）   -&gt;    C-n
窗口移动（move）     -&gt;    C-h
        窗口内容（scrool）   -&gt;    C-s
会话操作（session）  -&gt;    C-o
退出(quit)           -&gt;    C-q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="锁定窗口" tabindex="-1"><a class="header-anchor" href="#锁定窗口"><span>锁定窗口</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>快捷键     -&gt;      C-g
#锁定窗口没有子功能键，设计目的为，避免zellij本身快捷键与会话内应用快捷键冲突
#使用此功能后，会自动屏蔽zellij的其他快捷快捷键，包括退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="窗口操作" tabindex="-1"><a class="header-anchor" href="#窗口操作"><span>窗口操作</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>前置快捷键   -&gt;    C-p
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="标签操作" tabindex="-1"><a class="header-anchor" href="#标签操作"><span>标签操作</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>前置快捷键   -&gt;    C-t
#对标签页进行管理，标签页概念类似chrome浏览器标签页
移动至其他标签页            -&gt;    &lt;方向键&gt;
新建标签页                  -&gt;       n
关闭标签页                  -&gt;       x
重命名标签页                -&gt;       r
同步操作（多个会话输入同样内容）  -&gt;    s
选中窗口                    -&gt;     &lt;回车&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="窗口大小" tabindex="-1"><a class="header-anchor" href="#窗口大小"><span>窗口大小</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>前置快捷键    -&gt;     C-n
#对当前焦点所在窗口进行大小设置
各个方向的扩展（只能变大）   -&gt;    &lt;方向键&gt;
整体窗口大小                 -&gt;     &lt;-/+&gt;
确定修改                     -&gt;     &lt;回车&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="窗口移动" tabindex="-1"><a class="header-anchor" href="#窗口移动"><span>窗口移动</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>前置快捷键    -&gt;      C-h
移动或者切换当前焦点所在窗口位置(浮动窗口有效)    -&gt;    &lt;方向键&gt;
交换位置                                          -&gt;      n
确定修改                                          -&gt;     &lt;回车&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="窗口内容" tabindex="-1"><a class="header-anchor" href="#窗口内容"><span>窗口内容</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>前置快捷键    -&gt;      C-s
上下行滚动内容             -&gt;    &lt;方向键上下&gt;
窗口内翻页滚动             -&gt;    &lt;pgUp/pgDown&gt;
窗口内最首行               -&gt;    u
窗口内最尾行               -&gt;    d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="会话操作" tabindex="-1"><a class="header-anchor" href="#会话操作"><span>会话操作</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>前置快捷键    -&gt;      C-o
分离当前会话              -&gt;   d
选中当前窗口              -&gt;   &lt;回车&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="退出" tabindex="-1"><a class="header-anchor" href="#退出"><span>退出</span></a></h4><h4 id="会话管理" tabindex="-1"><a class="header-anchor" href="#会话管理"><span>会话管理</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#以下内容属于工作模式的一些操作
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),d=[t];function r(o,c){return e(),s("div",null,d)}const v=n(l,[["render",r],["__file","终端.html.vue"]]),m=JSON.parse('{"path":"/%E7%BC%96%E7%A8%8B/%E5%B7%A5%E5%85%B7/%E7%BB%88%E7%AB%AF.html","title":"终端","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-01-01T00:00:00.000Z","category":["工具"],"tag":["终端"],"description":"终端 终端配置 参考https://zuolan.me/2023-terminal windows, linux，mac下用alacritty终端， zsh安装 mac下：brew install zsh ubuntu下：apt install zsh zsh --version chsh -s /bin/zsh 安装oh-my-zsh（如使用star...","head":[["meta",{"property":"og:url","content":"https://blog.cizai.io/%E7%BC%96%E7%A8%8B/%E5%B7%A5%E5%85%B7/%E7%BB%88%E7%AB%AF.html"}],["meta",{"property":"og:site_name","content":"此在笔记"}],["meta",{"property":"og:title","content":"终端"}],["meta",{"property":"og:description","content":"终端 终端配置 参考https://zuolan.me/2023-terminal windows, linux，mac下用alacritty终端， zsh安装 mac下：brew install zsh ubuntu下：apt install zsh zsh --version chsh -s /bin/zsh 安装oh-my-zsh（如使用star..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.cizai.io/assets/images/终端.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T10:04:59.000Z"}],["meta",{"property":"article:author","content":"cizai"}],["meta",{"property":"article:tag","content":"终端"}],["meta",{"property":"article:published_time","content":"2022-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-26T10:04:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"终端\\",\\"image\\":[\\"https://blog.cizai.io/assets/images/终端.png\\",\\"https://pic1.zhimg.com/v2-d9265712ecb94f3ded46dad54a91a5e8_b.jpg\\"],\\"datePublished\\":\\"2022-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-26T10:04:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cizai\\",\\"url\\":\\"https://blog.cizai.io\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://blog.cizai.io/atom.xml","title":"此在笔记 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://blog.cizai.io/feed.json","title":"此在笔记 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://blog.cizai.io/rss.xml","title":"此在笔记 RSS Feed"}]]},"headers":[{"level":2,"title":"终端配置","slug":"终端配置","link":"#终端配置","children":[{"level":3,"title":"zsh安装","slug":"zsh安装","link":"#zsh安装","children":[]},{"level":3,"title":"安装oh-my-zsh（如使用starship则不用安装）","slug":"安装oh-my-zsh-如使用starship则不用安装","link":"#安装oh-my-zsh-如使用starship则不用安装","children":[]},{"level":3,"title":"安装starship命令行主题（个人更喜欢powerlevel10k）","slug":"安装starship命令行主题-个人更喜欢powerlevel10k","link":"#安装starship命令行主题-个人更喜欢powerlevel10k","children":[]},{"level":3,"title":"安装 Nerd fonts 字体","slug":"安装-nerd-fonts-字体","link":"#安装-nerd-fonts-字体","children":[]},{"level":3,"title":"alacritty配置","slug":"alacritty配置","link":"#alacritty配置","children":[]},{"level":3,"title":"Zellij 配置 （alacritty已支持多窗口，不再需要Zellij）","slug":"zellij-配置-alacritty已支持多窗口-不再需要zellij","link":"#zellij-配置-alacritty已支持多窗口-不再需要zellij","children":[]},{"level":3,"title":"zellij布局文件","slug":"zellij布局文件","link":"#zellij布局文件","children":[]},{"level":3,"title":"zellij使用","slug":"zellij使用","link":"#zellij使用","children":[]}]}],"git":{"createdTime":1710697545000,"updatedTime":1711447499000,"contributors":[{"name":"lijc210","email":"lijc210@163.com","commits":1},{"name":"sampan","email":"lijc210@163.com","commits":1}]},"readingTime":{"minutes":5.62,"words":1687},"filePathRelative":"编程/工具/终端.md","localizedDate":"2022年1月1日","excerpt":"\\n<h2>终端配置</h2>\\n<p>参考https://zuolan.me/2023-terminal</p>\\n<p>windows, linux，mac下用alacritty终端，</p>\\n<h3>zsh安装</h3>\\n<p>mac下：brew install zsh\\nubuntu下：apt install zsh\\nzsh --version\\nchsh -s /bin/zsh</p>\\n<h3>安装oh-my-zsh（如使用starship则不用安装）</h3>\\n<p>sh -c \\"$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\\"\\ncurl: (35) error:0A000126:SSL routines::unexpected eof while reading\\n添加 --tlsv1.2 或 --tlsv1.3</p>","autoDesc":true}');export{v as comp,m as data};
