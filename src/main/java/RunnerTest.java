import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/features",
        glue = "ru.kpd.steps",
        format = {"pretty", "json:target/cucumber.json","html:target/cucumber.html"},
        tags = "@MultiRequestFSSP",
        dryRun = false,
        strict = false,
        snippets = SnippetType.UNDERSCORE
)

public class RunnerTest {
}