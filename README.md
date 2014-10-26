# lookup-jquery-ast [POC]

Detect if variable is jQuery object.

``` js
var $body = $(document.body)
$body.html(str);
// => $body.html is jQuery method
```

Dependency:

- [benjamn/ast-types](https://github.com/benjamn/ast-types "benjamn/ast-types")

## Installation

```
npm install
# example.js
node index.js
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT