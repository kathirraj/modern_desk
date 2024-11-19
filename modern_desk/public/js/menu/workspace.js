frappe.views.Workspace = class CustomWorkspace extends frappe.views.Workspace {
    constructor(wrapper) {
        super(wrapper);
    }

    show() {
        if (frappe.router?.current_route &&
            frappe.router.current_route.length > 1 &&
            frappe.router.current_route[0].toLowerCase() === "workspaces") {
            this.hideSidebar();
        }
        super.show(); // Ensure the parent method is called
    }



    addSidebarItem(targetSelector, itemHTML) {
        const containers = document.querySelectorAll(targetSelector);
        containers.forEach(container => {
            const newSidebarItem = document.createElement('div');
            newSidebarItem.className = 'desk-sidebar-item standard-sidebar-item';
            newSidebarItem.innerHTML = itemHTML;
            container.appendChild(newSidebarItem);
        });
    }
};


    customWorkspace.addSidebarItem('.sidebar-item-container.is-draggable[item-name="Buying"]', newItemHTML);
});
