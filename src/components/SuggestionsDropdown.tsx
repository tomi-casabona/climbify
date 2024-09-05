import { useOutsideClick } from "../services/sugestionServices/useOutsideClick";

interface SuggestionsDropdownProps {
	suggestions: string[];
	onSelectSuggestion: (suggestion: string) => void;
	closeDropdown: () => void;
}

export const SuggestionsDropdown: React.FC<SuggestionsDropdownProps> = ({
	suggestions,
	onSelectSuggestion,
	closeDropdown,
}) => {
	const ref = useOutsideClick(closeDropdown);

	if (suggestions.length === 0) return null;
	console.log(suggestions);

	return (
		<ul
			ref={ref}
			className="dropdown-menu absolute z-10 w-full mt-1 bg-white rounded-lg border border-gray-300 shadow-lg text-black">
			{suggestions.map((suggestion, index) => (
				<li
					key={index}
					className="dropdown-item cursor-pointer px-4 py-2 hover:bg-gray-100"
					onClick={() => {
						onSelectSuggestion(suggestion);
						closeDropdown();
					}}>
					{suggestion}
				</li>
			))}
		</ul>
	);
};
