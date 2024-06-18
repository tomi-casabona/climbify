import type { Attempt, Route } from "../types/dataTypes";

export const updatePegue = (routeParam: Route, routes: Route[], attempt: Attempt) => {
	let updatedRoute: Route = {
		...routeParam,
		routeAttempts: [...routeParam.routeAttempts, attempt],
	};

	let routeCompleted = false;
	updatedRoute.routeAttempts.forEach((attempt) => {
		if (attempt.completed) {
			routeCompleted = true;
		}
	});

	updatedRoute = { ...updatedRoute, completed: routeCompleted };
	// Find the route by ID and update it
	const routeIndex = routes.findIndex((route) => route.routeId === routeParam.routeId);
	const newRoutes = [...routes];
	if (routeIndex !== -1) {
		newRoutes[routeIndex] = {
			...updatedRoute,
			routeAttempts: [...routeParam.routeAttempts, attempt],
		};
	}

	return newRoutes;
};
