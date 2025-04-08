import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-svh flex justify-center items-center">
			<h1 className="text-5xl font-mono">Hi!</h1>
		</div>
	);
}
