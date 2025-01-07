<script>
  let { form } = $props();
</script>

<a href="/players">Back</a>
{#if form?.success}
  <div class="alert alert-success mt-3" role="alert" onintrostart={() => setTimeout(() => form.success = false, 5000)}>
    Player added successfully!
  </div>
{/if}
<h1 class="text-center mt-3">Add a Player</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" name="name" required />
  </div>
  <div class="mb-3">
    <label for="value" class="form-label">Value</label>
    <input type="text" class="form-control" id="value" name="value" required />
  </div>
  <div class="mb-3">
    <label for="age" class="form-label">Age</label>
    <input type="number" class="form-control" id="age" name="age" required />
  </div>
  <div class="mb-3">
    <label for="position" class="form-label">Position</label>
    <input
      type="text"
      class="form-control"
      id="position"
      name="position"
      required
    />
  </div>
  <div class="mb-3">
    <label for="club" class="form-label">Club</label>
    <input type="text" class="form-control" id="club" name="club" required />
  </div>
  <div class="d-flex justify-content-center">
    <button type="submit" class="btn btn-primary">Add Player</button>
  </div>
</form>
