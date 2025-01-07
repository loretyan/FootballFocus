<script>
    let { player } = $props();
</script>

<div>
    <form method="POST" action="?/delete">
        <input name="id" type="hidden" value={player._id} />
        <button class="btn btn-danger">Delete Player</button>
    </form>
</div>
