<script>
    let { data, form } = $props();
</script>

<a href={`/clubs/${data.club._id}`}>Back</a>

{#if form?.success}
    <div class="alert alert-success mt-3" role="alert">
        Club updated successfully!
    </div>
{/if}

<h1 class="text-center mt-3">Update {data.club.name}</h1>

<form method="POST" action="?/update">
    <input name="id" type="hidden" value={data.club._id} />
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
            value={data.club.name}
            type="text"
            class="form-control"
            id="name"
            name="name"
            required
        />
    </div>
    <div class="mb-3">
        <label for="yearOfEstablishment" class="form-label">Year of Establishment</label>
        <input value={data.club.yearOfEstablishment} type="number" class="form-control" id="yearOfEstablishment" name="yearOfEstablishment" required />
      </div>
      <div class="mb-3">
        <label for="stadium" class="form-label">Stadium</label>
        <input value={data.club.stadium} type="text" class="form-control" id="stadium" name="stadium" required />
      </div>
    <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary">Update Club</button>
    </div>
</form>
