import React from "react";

const MenuList = () => {
	const menuItems = [
		{ id: "skills", label: "skills", hasIcon: true },
		{ id: "experience", label: "experience", hasIcon: false },
		{ id: "certificate", label: "certificate", hasIcon: false },
		{ id: "contact", label: "contact", hasIcon: false },
	];

	return (
		<ul className="menu-list">
			{menuItems.map((item) => (
				<li key={item.id} className={item.hasIcon ? `menu-item-${item.id}` : ""}>
					{item.hasIcon ? <button>{item.label}</button> : item.label}
				</li>
			))}
		</ul>
	);
};

export default MenuList;
