<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from './pages/Home';

  export let url = "";
  $: console.log(url);
</script>


<Router url="{url}">
  <nav>
    <Link to="/home">Home</Link>
  </nav>
  <Route path="/home" component="{Home}" />
</Router>
