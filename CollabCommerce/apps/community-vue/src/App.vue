
<template>
  <div class="wrap">
    <header>
      <h1>💬 CollabCommerce — Community Hub (Vue + Router + Vuex)</h1>
      <nav>
        <a href="../../">Home</a>
        <a href="../../shop/">Shop</a>
        <a href="../../console/">OpsConsole</a>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<style>
.wrap{max-width:900px;margin:40px auto;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
nav a{margin-left:12px}
.card{background:#fff;border-radius:16px;box-shadow:0 4px 16px rgba(0,0,0,.08);padding:16px;margin:12px 0}
</style>
