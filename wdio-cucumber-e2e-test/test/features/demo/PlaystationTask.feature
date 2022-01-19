Feature: Playstation Task 2

    #@PSXTask2
    Scenario Outline: Automated Test for Task 2
        Given Playstation page is opened
        When the window is resized to 1920x1080
        When verifying the homepage slider is working
        When scrolling to New Releases section
        When clicking on the right arrow to see the Games Coming Soon
        When taking a screenshot of the page
        Then verify the last game title in the Coming Soon games