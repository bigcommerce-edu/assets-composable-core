Follow along in your project codebase.

## 4.1

`components/Header.tsx`:

```javascript
...

const Header = () => {
  const { settings } = useGlobalData();

  if (!settings) {
    return '';
  }

  const { logoImageUrl, logoText, storeName } = settings;

  return (
    ...
  )
}

...
```
