<script context="module">
	export const prerender = true;

	export async function load({ fetch }) {
		const response = await fetch('/api/alive');

		return {
			status: response.status,
			props: {
				status: response.ok && (await response.json())
			}
		};
	}
</script>

<script>
	export let status;
</script>

<h1>Welcome to SvelteKit Azure</h1>
<p>Start with SvelteKit and Azure including functions</p>
<pre>{JSON.stringify(status, null, 2)}</pre>
<div>
	Made with ❤️ by <a href="http://tayfunguelcan.de/" rel="external" target="_blank">Tayfun</a>
</div>
