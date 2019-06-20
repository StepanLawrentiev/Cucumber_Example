package ru.kpd.steps;

import cucumber.api.DataTable;
import cucumber.api.java.ru.Допустим;
import cucumber.api.java.ru.Когда;
import cucumber.api.java.ru.Тогда;
import org.junit.Assert;
import org.openqa.selenium.*;

import java.util.List;
import java.util.Map;


public class Step extends Endpoint {
    @Допустим("^пользователь перешел на страницу авторизации$")
    public void stepToPage () {
        driver.get(PlatformURL);
    }
    @Когда("^пользователь авторизуется введя корректные учётные данные$")
    public void authorizationWitchCorrectData () {
        driver.findElement(By.id("j_username")).sendKeys(admin);
        driver.findElement(By.id("j_password")).sendKeys(passwordadmin);
        driver.findElement(By.id("loginBtn")).click();
    }
    @Тогда("^происходит успешная авторизация$")
    public void CheckCorrectAuthorization() {
        String logged = driver.findElement(By.xpath("//span[@class=\"loggedIn-user\"]")).getText();
        Assert.assertTrue("Не удалось авторизироваться под администратором системы", logged.contains("admin"));
    }

    @Когда("^пользователь пытается авторизоваться введя некорректные учётные данные$")
    public void authorizationWitchNotCorrectData() {
        driver.findElement(By.id("j_username")).sendKeys(admin);
        driver.findElement(By.id("j_password")).sendKeys("123");
        driver.findElement(By.id("loginBtn")).click();
    }

    @Тогда("^появляется предупреждение ([^\"]*)$")
    public void checkCautionNotCorrectAuthorization (String Caution) {
    String errorAuth = driver.findElement(By.xpath("//*[@id=\"loginForm\"]")).getText();
    Assert.assertTrue("Сообщение "+Caution+" не выводится", errorAuth.contains(Caution));
    driver.quit();
    }

    @Допустим("^пользователь авторизован под KpdUser$")
    public void authorizationUnderKpdUser() {
        driver.get(PlatformURL);
        driver.findElement(By.id("j_username")).sendKeys(kpdUser);
        driver.findElement(By.id("j_password")).sendKeys(passwordKpdUser);
        driver.findElement(By.id("loginBtn")).click();
    }

    @Допустим("^перешел на страницу ([^\"]*)$")
    public void wentToPage (String URL) {
        driver.get(PlatformURL + URL);
    }

    @Допустим("^пользователь нажал на кнопку ([^\"]*)$")
    public void pressTheButton (String button) {
        driver.findElement(By.xpath("//*[contains(text(),\""+button+"\")]")).click();
    }

    @Когда("^пользователь заполнил 3 поля$")
    public void fillingInThreeFields (DataTable arg1) {
        List<Map<String, String>> table = arg1.asMaps(String.class, String.class);
        System.out.println(table);
        driver.findElement(By.xpath("//input[@data-p-label=\""+table.get(0).get("Название")+"\"]")).sendKeys(table.get(0).get("Значение"));
        driver.findElement(By.xpath("//input[@data-p-label=\""+table.get(1).get("Название")+"\"]")).sendKeys(table.get(1).get("Значение"));
        driver.findElement(By.xpath("//input[@data-p-label=\""+table.get(2).get("Название")+"\"]")).sendKeys(table.get(2).get("Значение"));
    }
    @Когда("^пользователь заполнил 2 поля$")
    public void fillingInTwoFields(DataTable arg1) {
        List<Map<String, String>> table = arg1.asMaps(String.class, String.class);
        System.out.println(table);
        driver.findElement(By.xpath("//input[@data-p-label=\""+table.get(0).get("Название")+"\"]")).sendKeys(table.get(0).get("Значение"));
        driver.findElement(By.xpath("//input[@data-p-label=\""+table.get(1).get("Название")+"\"]")).sendKeys(table.get(1).get("Значение"));
    }

    @Тогда("^В блоке ([^\"]*) присутствует строка: ([^\"]*)$")
    public void checkAvailability (String button, String title)  {
        String picklist = driver.findElement(By.xpath("//*[contains(text(),\""+button+"\")]")).getText();
        System.out.println(picklist);
        Assert.assertFalse("Запрашиваемая строка отсутствует", picklist.contains("Доступные виды сведений для Мультизапроса"));
    }

}