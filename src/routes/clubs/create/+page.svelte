<script>
    let { form } = $props();
  </script>
  
  <a href="/clubs">Back</a>
  {#if form?.success}
    <div class="alert alert-success mt-3" role="alert" onintrostart={() => setTimeout(() => form.success = false, 5000)}>
      Club added successfully!
    </div>
  {/if}
  <h1 class="text-center mt-3">Add a Club</h1>
  <form method="POST" action="?/create">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" name="name" required />
    </div>
    <div class="mb-3">
      <label for="yearOfEstablishment" class="form-label">Year of Establishment</label>
      <input type="number" class="form-control" id="yearOfEstablishment" name="yearOfEstablishment" required />
    </div>
    <div class="mb-3">
      <label for="stadium" class="form-label">Stadium</label>
      <input type="text" class="form-control" id="stadium" name="stadium" required />
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary">Add Club</button>
    </div>
  </form>
  