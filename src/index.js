import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>伪元素实现气泡提示</h1>
<p>
  <span class="tooltip" data-descr="伪元素">伪元素</span>
  <span class="tooltip" data-descr="实现">实现</span>
  <span class="tooltip" data-descr="气泡提示">气泡提示</span>
</p>
`;
