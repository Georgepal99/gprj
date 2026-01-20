package com.example.demo.security;

import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link JwtFilter}.
 */
@Generated
public class JwtFilter__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'jwtFilter'.
   */
  private static BeanInstanceSupplier<JwtFilter> getJwtFilterInstanceSupplier() {
    return BeanInstanceSupplier.<JwtFilter>forConstructor(JwtUtil.class, CustomUserDetailsService.class)
            .withGenerator((registeredBean, args) -> new JwtFilter(args.get(0), args.get(1)));
  }

  /**
   * Get the bean definition for 'jwtFilter'.
   */
  public static BeanDefinition getJwtFilterBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(JwtFilter.class);
    beanDefinition.setInstanceSupplier(getJwtFilterInstanceSupplier());
    return beanDefinition;
  }
}
