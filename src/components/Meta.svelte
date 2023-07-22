<script>
    const name = 'Todo List';
    const desc = 'A simple todo list app';
    const url = 'https://todo.bayudc.fun';
    const author = 'bayudc';
    const banner = {
        url: 'https://media.discordapp.net/attachments/946013429200723989/1132376657907437688/banner_4.png',
        type: 'image/png',
        width: 1280,
        height: 640,
    };
</script>

<svelte:head>
    <title>{name} | {desc}</title>
    <link rel="canonical" href={url} />

    <meta name="description" content={desc} />
    <meta name="author" content={author} />
    <meta name="publisher" content={author} />

    <meta name="og:title" content={name} />
    <meta name="og:description" content={desc} />
    <meta name="og:type" content="website" />
    <meta name="og:site_name" content={name} />
    <meta name="og:url" content={url} />

    <meta name="og:img" content={banner.url} />
    <meta name="og:img:type" content={banner.type} />
    <meta name="og:img:width" content={banner.width} />
    <meta name="og:img:height" content={banner.height} />

    <meta name="twitter:image" content={banner.url} />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
