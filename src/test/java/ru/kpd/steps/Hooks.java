package ru.kpd.steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class Hooks extends Endpoint {
    @Before
    public static void tearUp(){
        System.setProperty("webdriver.chrome.driver", "C:/ProgramData/chocolatey/lib/chromedriver/tools/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }
    @After (value = "~@noAuthorized")
    public static void tearDown() {
        driver.findElement(By.className("fa-power-off")).click();
        driver.quit();
    }
}