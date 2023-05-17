# getAttribute

---

### getAttributeとは

引数で指定した属性の値を取得できる、プロパティ

<aside>
💡 変数名.getAttribute("取得したい属性”)

引数で指定した属性の値を取得できる！！

```jsx
//HTML
//<h2>歴史</h2>
//<a href="/wiki/%E5%BA%AD" title="庭">庭</a>

const h2 = document.querySelector("h2")
//<h2>歴史</h2>
h2.getAttribute("class")
//null

const link = document.querySelector("a");
link.getAttribute("href")　　　///wiki/%E5%BA%AD
link.getAttribute("title")　　//庭
```

</aside>

# setAttribute

---

### setAttributeとは

引数で指定した属性を割り当てる事ができる

割り当て先に属性が記述されている場合は、`上書きされる`為、要素を追加する場合はaddを利用する

<aside>
💡 変数名.setAttribute("割り当てたい属性”)

```jsx
//HTML
//<h2 class="h2class>歴史</h2>
//<a href="/wiki/%E5%BA%AD" title="庭">庭</a>

const h2 = document.querySelector("h2")
//<h2 class="h2class>歴史</h2>
h2.setAttribute("class", "change-class")
h2.getAttribute("class")
//<h2 class="change-class">歴史</h2>
```

</aside>

# classList.add / classList.remove

---

### classList.add / classList.removeとは

引数で指定したclass要素を、既存のclassに追加や削除する事ができる

<aside>
💡 変数名.setAttribute("割り当てたい属性”)

```jsx
//HTML
//<h2 class="h2class>歴史</h2>

const h2 = document.querySelector("h2")

h2.classList.add("change-class")
h2.getAttribute("class")
//<h2 class="h2class change-class">歴史</h2

h2.classList.remove("change-class")
//<h2 class="h2class>歴史</h2>
```

</aside>

# classList.contains

---

### classList.containsとは

引数で指定したclass要素が含まれるかを真偽値で返してくれる

<aside>
💡 変数名.setAttribute("確認したい属性”)

```jsx
//HTML
//<h2 class="h2class>歴史</h2>

const h2 = document.querySelector("h2")

h2.classList.contains("h2class")
//true

h2.classList.contains("change-class")
//false
```

</aside>

# classList.toggle

---

### classList.toggleとは

引数で指定したclass要素を切り替える事ができる

指定した要素が含まれる場合、要素を外し

指定した要素が含まれない場合、要素を追加する

<aside>
💡 変数名.setAttribute("切り替えたい属性”)

```jsx
//HTML
//<h2 class="h2class>歴史</h2>

const h2 = document.querySelector("h2")

h2.classList.toggle("h2class")
//false
//<h2 class >歴史</h2>

h2.classList.toggle("h2class")
//true
//<h2 class="h2class>歴史</h2>
```

</aside>
