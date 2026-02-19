<script>
    let { data } = $props();
</script>
<h1>Edit Category</h1>
<form method="POST" action="?/edit">
    <div>
        <label for="name">Category name</label>
        <input type="text" id="name" name="name" required value={data.Category.name}>
    </div>
    <div>
        <button type="submit">Edit Category</button>
    </div>
</form>
<style>
    :global(body) {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background-color: #f4f6f9;
        margin: 0;
        padding: 2rem;
        color: #1f2937;
    }

    h1 {
        margin-bottom: 2rem;
        font-size: 2rem;
        font-weight: 600;
    }

    .form-card {
        max-width: 500px;
        background: white;
        padding: 2rem;
        border-radius: 14px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    label {
        font-weight: 500;
        font-size: 0.95rem;
        color: #374151;
    }

    input {
        padding: 0.7rem 0.9rem;
        border-radius: 8px;
        border: 1px solid #d1d5db;
        font-size: 0.95rem;
        transition: all 0.2s ease;
    }

    input:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }

    .form-actions {
        display: flex;
        justify-content: flex-end;
    }

    .primary {
        background: #2563eb;
        color: white;
        border: none;
        padding: 0.6rem 1.4rem;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        transition: 0.2s ease;
    }

    .primary:hover {
        background: #1d4ed8;
    }
</style>