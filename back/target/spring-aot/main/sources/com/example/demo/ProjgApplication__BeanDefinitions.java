package com.example.demo;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link ProjgApplication}.
 */
@Generated
public class ProjgApplication__BeanDefinitions {
  /**
   * Get the bean definition for 'projgApplication'.
   */
  public static BeanDefinition getProjgApplicationBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(ProjgApplication.class);
    beanDefinition.setInstanceSupplier(ProjgApplication::new);
    return beanDefinition;
  }
}
