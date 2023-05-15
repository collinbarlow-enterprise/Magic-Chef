import React from 'react';

export default function HomePage() {
  return (
    <div>
      <div className="container">
        <div className="home-page">
          <h1 className="text-center">Welcome to Magic Chef!</h1>
          <div></div>
          <p>Your personal, AI-powered, private chef. If you're unsure what to cook tonight, Magic Chef will generate a recipe using commonly found ingredients and the ones you supply.</p>
          <br/>
          <h5 >Here's how to use Magic Chef:</h5>
          <ul className="home-form">
            <li>Go to the New Pantry Page</li>
            <li>Add your ingredients to the list</li>
            <li>Click on the Create Recipe button</li>
            <li>Then look at the recipe details</li>
          </ul>
          <br/>
          <p>Note that it can take up to 30 seconds for the recipe to generate. Magic Chef has a lot to think about. </p>
        </div>
      </div>
    </div>
  )
}
