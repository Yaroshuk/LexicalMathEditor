# Magmamath component library

## Requirements

-   React version 18.2.0 or higher is required.

## Contributing to design system

Create a new folder for your component in the `src/components`, add appropriate stories.
To run storybook use `yarn storybook`

## How to install

1. Install the component library
   `yarn add @magmamath/ui`
2. Import the CSS styles `@magmamath/ui/dist/style.css` from the component library in consumer's project main entry file (e.g., `index.tsx`).
3. Import the CSS variables `@magmamath/ui/dist/variables.scss`.
4. To use SCSS mixins import `@magmamath/ui/dist/shared.scss` into your .scss file in which you plan to use it. Mixins provided by the library have a specific name that begins with "ui-" prefix. 

## Testing changes to components locally

By following these steps, you can test your package locally without the need to publish it to a package registry. You will know how to import and use your package in consuming projects (students-web, teachers-web).

1. **Build the Package:**..
   Ensure your package is built and ready to be used. Run build command `yarn build`. This step generates the necessary output files (e.g., bundled JavaScript files) required for local testing.

2. **Link the package:**  
   From the root directory of your package **@magmamath/ui**, run the following command to create a symlink globally on your machine: `yarn link`. This command creates a symbolic link for your package, making it accessible from any project on your machine.

    Yarn link doesn't work well with React dependencies resolving so you need to follow these steps https://github.com/facebook/react/issues/14257#issuecomment-595183610.

3. **Link the package in consuming projects(students-web, teachers-web):**  
   Navigate to the root directory of project-consumer of your design system and run the following command to link the package: `yarn link @magmamath/ui`. Where **@magmamath/ui** is the actual name of your design system package. This command links the globally installed package to your consuming project.

4. **Test locally:**  
   Now you can import and use your package within your apps just like you would with any other dependency. Import the required modules, use the package's functionality, and test its behavior within the context of your app.

During the testing phase, any changes you make to the package's source code will be immediately reflected in the consumer app since it is linked to the local development version of the package.

Remember to repeat step 1 if you make changes to your package's code and need to rebuild it.

5. **After testing is done:** It is good practice to remove the package link once you are done testing it locally. To remove the package link:

Navigate to the root directory of your consumer package. Run the following command to unlink the package: `yarn unlink @magmamath/ui`. This command removes the link between your consumer project and the local development version of the design system package.

If you want to remove the global symlink created for the package, navigate to the root directory of your package and run: `yarn unlink`. This command removes the global symlink for your package.

Removing the package link ensures that consumer project is no longer dependent on the local development version of the package. It allows you to cleanly separate the testing phase from the actual usage of published versions of the package.

Remember to repeat these steps whenever you want to remove the link or when you no longer need to test the package locally.
