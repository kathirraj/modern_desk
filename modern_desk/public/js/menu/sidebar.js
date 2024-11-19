frappe.provide("frappe.ui");

// Extend the existing Sidebar class
frappe.ui.Sidebar = class CustomSidebar extends frappe.ui.Sidebar {
	constructor({ wrapper, css_class }) {
		// Ensure the parent constructor is properly called
		if (wrapper && css_class) {
			super({ wrapper, css_class });
		} else {
			console.error("Wrapper or CSS class not provided.");
		}
	}

	// Custom method to add an item to the sidebar
	add_custom_item(item) {
		if (item && item.href && item.label) {
			const $li_item = $(`<li class="custom-item-class">
				<a href="${item.href}">${item.label}</a>
			</li>`);
			this.$sidebar.append($li_item);
		} else {
			console.error("Invalid item data.");
		}
	}

	// Override the existing method to use the custom logic
	add_item(item, section, h6 = false) {
		if (item.custom) {
			this.add_custom_item(item);
		} else {
			// Ensure that the parent class method is called
			super.add_item(item, section, h6);
		}
	}
};

// Usage Example: Ensure this is executed after Frappe has fully loaded
const customSidebar = new frappe.ui.Sidebar({
	wrapper: $(".sidebar-wrapper"), // Ensure the wrapper exists in your HTML
	css_class: "custom-sidebar"
});

customSidebar.add_item({
	custom: true,
	href: "#",
	label: "Custom Link"
}, "section1");
