package com.example.demo.security;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link RestAuthenticationEntryPoint}.
 */
@Generated
public class RestAuthenticationEntryPoint__BeanDefinitions {
  /**
   * Get the bean definition for 'restAuthenticationEntryPoint'.
   */
  public static BeanDefinition getRestAuthenticationEntryPointBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(RestAuthenticationEntryPoint.class);
    beanDefinition.setInstanceSupplier(RestAuthenticationEntryPoint::new);
    return beanDefinition;
  }
}
