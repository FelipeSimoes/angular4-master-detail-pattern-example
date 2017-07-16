export function getPaths(controllers: any): any[] {
    return Object.keys(controllers).reduce((set, k) => {
        const controller: RouteController = controllers[k];
        controller.paths.forEach(route => {
            set.push({
                path: route,
                component: controller,
            });
        });
        return set;
    }, []);
}
