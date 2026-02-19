<script>
    let {children} = $props();
</script>

<header>
    <h1>Admin Dashboard</h1>
    <div>
<a href="/admin/events">Manage my events</a>
<a href="/admin/categories">Manage my category</a>
</div>
</header>

{@render children()}

<style>
    header{
        background-color: pink;
    }
    
    div{
        display: flex;
        justify-content: space-evenly;
        background-color:lightcyan ;
        padding: 10px;
    }
    a{
    text-decoration: none;
    }
    
</style>