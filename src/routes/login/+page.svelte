<script>
    let { form } = $props();
</script>
<h1>Login-Page</h1>

{#if form?.error}

    <p id="warning">
        {form.error}
    </p>
{/if}
<section>
    <form action="?/login" method="POST">
    <div>
        <label for="username">Username</label>
        <input type="text" name="username" id="username">
    </div>
    <div>
        <label for="password">Password</label>
        <input type="text" name="password" id="password">
    </div>
    <div>
        <button type="submit">Login</button>
    </div>
</form>
<a href="/register">Register</a>
</section>

<style>
    #warning {
        border: 1px solid white;
        background-color: red;
        padding: 25px;
        margin: 10px;
    }
</style>