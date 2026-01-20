package com.example.demo.service;

import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.HistoryRepository;
import org.springframework.aot.generate.Generated;
import org.springframework.beans.factory.aot.BeanInstanceSupplier;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.beans.factory.support.RootBeanDefinition;

/**
 * Bean definitions for {@link HistoryService}.
 */
@Generated
public class HistoryService__BeanDefinitions {
  /**
   * Get the bean instance supplier for 'historyService'.
   */
  private static BeanInstanceSupplier<HistoryService> getHistoryServiceInstanceSupplier() {
    return BeanInstanceSupplier.<HistoryService>forConstructor(HistoryRepository.class, CustomerRepository.class)
            .withGenerator((registeredBean, args) -> new HistoryService(args.get(0), args.get(1)));
  }

  /**
   * Get the bean definition for 'historyService'.
   */
  public static BeanDefinition getHistoryServiceBeanDefinition() {
    RootBeanDefinition beanDefinition = new RootBeanDefinition(HistoryService.class);
    beanDefinition.setInstanceSupplier(getHistoryServiceInstanceSupplier());
    return beanDefinition;
  }
}
