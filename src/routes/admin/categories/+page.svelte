<script>
    let {data} = $props();
</script>

<h1>Manage my Categories</h1>
<a href="/admin/category/new">
    <button>Add new Category</button>
</a>
<main>
    {#each data.categories as category}
    <div class="category">
        <p>{category.name}</p>
        <div>
            <a href="/admin/category/{category.id}/edit">
            <button>Edit</button></a>
        <form action="?/delete" method="POST">
            <input type="hidden" value={category.id} name="id">
            <button type="submit">Delete</button>
        </form>
        </div>
    </div>
    {/each}
</main>
<style>
    <style>
    :global(body) {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background-color: #f4f6f9;
        margin: 0;
        padding: 2rem;
        color: #1f2937;
    }

    h1 {
        margin-bottom: 1.5rem;
        font-size: 2rem;
        font-weight: 600;
    }

    .add-link {
        text-decoration: none;
    }

    .primary {
        background: #2563eb;
        color: white;
        border: none;
        padding: 0.6rem 1.2rem;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        transition: 0.2s ease;
        margin-bottom: 2rem;
    }

    .primary:hover {
        background: #1d4ed8;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .category {
        background: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: 0.2s ease;
    }

    .category:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    }

    .category-name {
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0;
    }

    .actions {
        display: flex;
        gap: 0.5rem;
    }
    button {
        border: none;
        padding: 0.4rem 0.9rem;
        border-radius: 6px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: 0.2s ease;
    }

    .edit {
        background: #e5e7eb;
        color: #111827;
    }

    .edit:hover {
        background: #d1d5db;
    }

 .delete {
        background: #ef4444;
        color: white;
    }

    .delete:hover {
        background: #dc2626;
    }

    form {
        margin: 0;
    }
</style>