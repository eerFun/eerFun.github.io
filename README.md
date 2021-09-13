# eerFun.github.io
Here is [**eerFun**](https://eerFun.github.io) - My Digital Notebook.

This is a minimal Jekyll blog powered from [Gesko](https://github.com/P0WEX/Gesko) and **customized** for my purpose.
## Installation

1. Install `Jekyll` [requirements](https://jekyllrb.com/docs/installation/)
2. Install `Nodejs` and `npm`
3. Run
    ```bash
    $ npm install
    $ bundle install
    $ bundle exec jekyll build
    $ bundle exec jekyll serve
    ```
4. For convenience, use these commands:

    To `serve` project on `localhost:4000`:
    ```bash
    $ npm start
    ```
    To `build` project:
    ```bash
    $ npm run build
    ```
## Add new tag
To create new tag, create a folder in `tag/` with the name of the new one. In this folder add an `index.html` file and just add this header:
```
---
layout: tag
tag: yourNewTag
---
```
Then build again and you're ready!!
## Useful Docs
- [Jekyll](https://jekyllrb.com/)
- [Kramdown](https://kramdown.gettalong.org/syntax.html)
- [Liquid Filters](https://jekyllrb.com/docs/liquid/filters/)
- [Liquid Docs](https://shopify.github.io/liquid/basics/introduction/)

## License

This project is open source and available under the [MIT License](LICENSE.md).
