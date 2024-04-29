// Generate a header with a title in the middle
// if it's mobile, the title should be centered
// if it's desktop, the title should be on centered with font size 3xl
// the title should be "Jai Prakash"
// the title should be bold
// the title should use the font "Fira"
// the title should be a h1
// the title should be in a header
// header should have spacing of 4
// header should have some shadow at the bottom
// give the header a fancy background color
// make the background color a gradient from green to blue
// use the tailwindcss classes to style the header
// title color should be white
//  add an alias text JP next to the title
// make the alias text same size as the title
// make the alias text different color
// animate the alias text with a color transition


// create a header component
const Header = () => {
    return (
        <header className="p-4 shadow-lg bg-gradient-to-r from-green-400 to-blue-500">
        <h1 className="text-white text-center font-bold font-fira text-3xl">
            Jai Prakash
            <span className="text-green-400 transition duration-500 hover:text-blue-400 ml-1">JP</span>
        </h1>
        </header>
    );
};

export default Header;