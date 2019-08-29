# \<mil-intersection-observer\>

'mil-intersection-observer' is an implementation of intersection-observer for Webcomponents. It is compatible with litElement.

## Usage

### Install from npm

```sh
npm install --save mil-intersection-observer
```

### Import to your element

```js
import "mil-intersection-observer";
```

### Use in your element

```sh
<mil-intersection-observer @intersect="${this.isIntersecting}" .thresholds="${[0.00, 0.50, 1.00]}" .root-margin="${"30px"}">

<your-element-to-observe></your-element-to-observe>

</mil-intersection-observer>
```

#### Attributes


| Attribute| Type| Default|
| -------- | --- | -------|
| `thresholds`| Array| [0.0, 0.25, 0.5, 0.75, 1.0] |
| `root-margin` | String  | `0px` |

#### Events

`@intersect` returns an object with 2 properties:</br>
`detail.isIntersecting`: returns true if element is intersecting one of the thresholds.</br>
`detail.intersectionRatio`: returns a value that represents the % of your element intersectiong.
