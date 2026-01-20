package com.example.demo.controller;

import com.example.demo.service.HistoryService;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link HistoryController}.
 */
@Generated
public class HistoryController__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'historyController'.
   */
  private static BeanInstanceSupplier<HistoryController> getHistoryControllerInstanceSupplier() {
    return BeanInstanceSupplier.<HistoryController>forConstructor(HistoryService.class)
            .withGenerator((registeredBean, args) -> new HistoryController(args.get(0)));
  }

  /**
   * Get the bean definition for 'historyController'.
   */
  public static BeanDefinition getHistoryControllerBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(HistoryController.class);
    beanDefinition.setInstanceSupplier(getHistoryControllerInstanceSupplier());
    return beanDefinition;
  }
}
