@Task1 @Slider
Feature: Task 1 - test the Playstation's Websites slider functionality

Background: 
  Given I navigate to the Playstation's Website
  When the Slider displays
  
Scenario: Slider will have a number of revolving banners
  When will be a series of revolving banners
  Then each banner will display for a few seconds
  
Scenario: Within each of the banners will be a picture
  Then a picture will be presented on each of the banners

Scenario: Buttons will be displayed within the Slider
  Then there will a button on each of the banners
  
Scenario Outline: Confirm the Slider's text
  Then there will a on each of the banner there will be <text>
    Examples: 
    | test      | 
    | Heading   | 
    | Paragraph |